<template>
  <form @submit.prevent="sendRequest" class="container">
    <!--  -->
    <div v-if="pick_science == null">
      <div class="slogan">Wybierz co cię interesuje</div>

      <div class="blocks">
        <div
          v-for="(science, index) in sciences"
          :key="science"
          @click="pick_science = index"
          class="block"
        >
          <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
          <div class="title" v-html="science.name" />
        </div>
        <div
          class="block others"
          @click=";(pick_science = 2137) && (pick_city = 'Dojazd')"
        >
          <img src="@/assets/sciences/others.svg" />
          <div class="title" v-html="'Coś innego'" />
        </div>
      </div>
    </div>
    <!--  -->
    <div v-if="pick_science != null && pick_online == null">
      <div class="slogan">Preferujesz korepetycje stacjonarnie czy online?</div>

      <div class="blocks">
        <div class="block" @click="pick_online = true">
          <img src="@/assets/sciences/informatics.svg" />
          <div class="title" v-html="'Online'" />
        </div>
        <div class="block" @click="pick_online = false">
          <img src="@/assets/sciences/geography.svg" />
          <div class="title" v-html="'Stacjonarnie'" />
        </div>
      </div>
      <div class="slogan reminder">
        Pamiętaj, że korepetycje online są pewniejsze, mają większą dostępność
        korepetytorów i jeśli zażądasz dojazdu będą też tańsze (15zł od dojazdu)
      </div>
    </div>
    <!--  -->
    <div
      v-if="pick_science != null && pick_online == false && pick_city == null"
    >
      <div class="slogan">Wybierz miasto z dostępnych</div>
      <div class="blocks">
        <div
          v-for="city in [
            ...new Set(
              TutorsDB.filter((e) =>
                e.sciences.includes(sciences[pick_science])
              ).map((e) => e.city)
            ),
          ]"
          :key="city"
          @click="pick_city = city"
          class="block"
        >
          <img src="@/assets/sciences/geography.svg" />
          <div class="title" v-html="city" />
        </div>
      </div>
      <div class="blocks">
        <div class="block others" @click="pick_online = true">
          <img src="@/assets/sciences/informatics.svg" />
          <div class="title" v-html="'Wolę jednak korepetycję online'" />
        </div>
      </div>
    </div>

    <!--  -->
    <div
      v-if="
        pick_science != null &&
        (pick_online == true || (pick_online == false && pick_city != null))
      "
    >
      <div class="slogan">Utwórz zgłoszenie</div>
      <div class="summary">
        <div class="flex">
          <div>
            <section>
              <div class="h">Przedmiot:</div>
              <div
                v-html="
                  pick_science != 2137
                    ? sciences[pick_science].name
                    : 'Coś innego'
                "
              />
              <div></div>
            </section>
            <section>
              <div class="h">Typ Korepetycji:</div>
              <div
                v-html="pick_online ? 'Online' : `Stacjonarnie (${pick_city})`"
              />
            </section>
            <section v-if="pick_science != 2137">
              <div class="h">Możliwi Korepetytorzy:</div>
              <div
                v-for="tutor in [
                  ...new Set(
                    TutorsDB.filter((e) =>
                      e.sciences.includes(sciences[pick_science])
                    ).filter((e) => (pick_online ? true : e.city == pick_city))
                  ),
                ]"
                :key="tutor"
                v-html="tutor.name"
              />
            </section>
          </div>
          <div class="grow">
            <section>
              <div class="h">Wpisz swoje imię</div>
              <div class="textcont">
                <textarea v-model="name" rows="1" />
              </div>
            </section>
            <section>
              <div class="h">Wybierz poziom edukacji</div>
              <select v-model="level" required>
                <option value="0">Szkoła podstawowa, 7-8</option>
                <option value="1">Szkoła średnia, poziom podstawowy</option>
                <option value="2">Szkoła średnia, poziom rozszerzony</option>
                <!-- <option value="3">Studia</option> -->
              </select>
            </section>
          </div>
        </div>
        <div>
          <div class="tellus">
            <b>Opisz szczegóły korepetycji.</b> Napisz coś o sobie / dziecku.
            Opisz klasę i profil oraz wszystkie przedmioty z jakich potrzebujesz
            pomocy. Napisz nam czego konkretnie oczekujesz - zajęcia wyrównawcze
            czy może konkursowe? Opowiedz o zainteresowaniach i planach. Jeśli
            preferujesz konkretnego korepetytora - powiedz nam o tym.
          </div>
          <div class="textcont">
            <textarea required class="text" rows="8" v-model="text" />
          </div>
        </div>
        <div class="tellus">
          Zostaw kontakt do siebie, najlepiej adres e-mail, numer telefonu lub
          link do konta na facebooku.
        </div>
        <div class="submitflex">
          <div class="submittext">
            <input
              required
              class="text"
              rows="1"
              v-model="contact"
              placeholder="zbigniew.kucharski@gmail.com"
            />
          </div>
          <button class="submitbutton">Wyślij</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TutorsDB } from '@/data/tutors'
import cities from '@/data/cities'
import axios from '@/config/axios'

export default defineComponent({
  data() {
    return {
      sciences: [...new Set(TutorsDB.map((e) => e.sciences).flat(1))],
      cities,
      TutorsDB,
      pick_science: null,
      pick_online: null,
      pick_city: null,
      pick_tutor: null,
      name: '',
      text: '',
      level: '0',
      contact: '',
    }
  },
  mounted() {
    document.title = 'Umów się | Lewe Korki'
  },
  methods: {
    async sendRequest() {
      const requestData = {
        subject: this.sciences[this.pick_science!].name,
        place: this.pick_online ? 'Online' : this.pick_city,
        name: this.name,
        level: [
          'Szkoła Podstawowa',
          'Szkoła Srednia PP',
          ' SzkołaSrednia PR',
          'Studia',
        ][Number(this.level)],
        contact: this.contact,
        text: this.text,
      }
      try {
        await axios.post('contact/request', requestData)
        this.$notify({
          type: 'success',
          title: 'Wysłano zgłoszenie',
          text: 'Odezwiemy się tak szybko jak to możliwe',
        })
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Nie udało się wysłać zgłoszenia',
          text: 'Spróbuj jeszcze raz lub wyślij zgłoszenie drogą mailową.',
        })
      }

      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.blocks {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
}
.block {
  margin: 5px;
  padding: 5px;
  width: 175px;
  height: 145px;
  border-radius: 10px;
  background: theme(main);
  color: theme(light);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    filter: brightness(1.12);
  }

  img {
    width: 80px;
    filter: invert(0.5) brightness(1.8);
    margin-bottom: 5px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    width: 200px;
    height: 115px;
    margin: 5px;
    img {
      width: 60px;
    }
  }
}

.others {
  width: 300px;
}

.slogan {
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    font-size: 23px;
    margin-top: 10px;
  }

  &.reminder {
    margin: auto;
    font-size: 20px;
    max-width: 800px;
    font-weight: 500;

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
}

.summary {
  width: 800px;
  max-width: 95vw;
  padding: 10px;
  margin: 10px 0;
  border: 3px solid theme(dark);
  border-radius: 10px;
  @media (max-width: 1000px) {
    padding: 5px 0;
    border: none;
    margin: 5px 0;
  }
}

.h {
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
}

section {
  margin: 10px;
  @media (max-width: 1000px) {
    margin: 5px;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grow {
  @media (min-width: 1000px) {
    margin-left: 10px;
  }
  flex-grow: 1;
}

input,
select,
button,
.rodo {
  display: block;
  font-size: 16px;
  padding: 5px 10px;
  margin: 5px;
  flex-grow: 1;
  border-radius: 7px;
  @media (max-width: 1000px) {
    font-size: 14px;
    margin: 5px 0;
  }
}
select:required:invalid {
  color: gray;
}
option {
  color: black;
}

textarea {
  flex-grow: 1;
  resize: none;
  padding: 5px;
  font-size: 16px;
  margin: 5px;

  border-radius: 7px;
  @media (max-width: 1000px) {
    font-size: 13px;
    margin: 5px 0;
    padding: 8px;
  }
}

.tellus {
  padding: 5px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
}

b {
  font-weight: 500;
}

.text {
  padding: 10px;
}

.textcont {
  display: flex;
}

.submitflex {
  display: flex;
  align-items: center;
  .submittext {
    flex-grow: 1;
    display: flex;
  }
  .submitbutton {
    background: theme(main);
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: 500;
    color: theme(light);
    margin-left: 10px;
  }
}
</style>
