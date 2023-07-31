<template>
  <form @submit.prevent="sendRequest">
    <div class="inputs">
      <div class="label">
        <label for="name"> Imię i nazwisko </label>
        <div>
          <input
            placeholder="Imię i nazwisko"
            name="name"
            v-model="data.name"
            required
          />
        </div>
      </div>
      <div class="label">
        <label for="city"> Lokalizacja </label>
        <div>
          <select v-model="data.city" name="city" required>
            <option value="" disabled selected hidden>Lokalizacja</option>
            <option v-for="city in cities" :key="city" :value="city.name">
              {{ city.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="label">
        <label for="dateofbirth"> Data urodzenia </label>
        <div>
          <input
            placeholder="Data urodzenia"
            type="date"
            name="dateofbirth"
            v-model="data.dob"
            min="1920-01-01"
            :max="new Date().toJSON().slice(0, 10).replace(/-/g, '-')"
            required
          />
        </div>
      </div>
    </div>
    <div class="label">
      <label for="desc">
        Opisz siebie, swoje wykształcenie, projekty, plany i motywacje.
      </label>
      <div>
        <textarea name="desc" rows="12" required v-model="data.text" />
      </div>
    </div>
    <div class="label">
      <label for="desc">
        Wybierz nauki, z jakich chcesz prowadzić korepetycje.
      </label>
      <div class="sc-icons">
        <div
          class="icon"
          v-for="science in sciences"
          :key="science"
          @click="pickScience(science.name)"
          :class="{ picked: data.sciences.includes(science.name) }"
        >
          <img :src="require(`@/assets/sciences/${science.img}.svg`)" />

          <div class="title">
            <div class="padding" v-html="science.name" />
          </div>
        </div>
      </div>
    </div>

    <div class="label">
      <label for="target">
        Opisz szczegóły nauczania. Do kogo kierujesz swoje korepetycje? (sp 7-8,
        średnia pp, średnia pr, studia)
      </label>
      <div>
        <textarea name="target" rows="4" v-model="data.target" required />
      </div>
    </div>

    <div class="label">
      <label>
        Wpisz swój e-mail, numer telefonu i link do profilu na FB.
      </label>
      <div class="inputs">
        <div class="inputs">
          <ic icon="envelope" />
          <input
            placeholder="zbigniew.kucharski@gmail.com"
            name="email"
            type="email"
            v-model="data.email"
            required
          />
        </div>
        <div class="inputs">
          <ic icon="phone" />
          <input
            placeholder="420 213 769"
            type="tel"
            name="phone"
            v-model="data.phone"
            required
          />
        </div>
        <div class="inputs">
          <ic :icon="['fa-brands', 'facebook-messenger']" />
          <input
            placeholder="facebook.com/bosniak2137"
            name="email"
            v-model="data.fb_link"
            required
          />
        </div>
      </div>
    </div>
    <button>Potwierdź</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cities from '@/data/cities'
import sciences from '@/data/sciences'
import axios from '@/config/axios'

export default defineComponent({
  data() {
    return {
      cities,
      sciences,
      data: {
        name: '',
        dob: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        city: '',
        sciences: [] as string[],
        text: '',
        target: '',
        email: '',
        phone: '',
        fb_link: '',
      },
    }
  },
  methods: {
    pickScience(name: string) {
      if (!this.data.sciences.includes(name)) {
        this.data.sciences!.push(name)
      } else {
        this.data.sciences.splice(this.data.sciences.indexOf(name), 1)
      }
    },
    async sendRequest() {
      try {
        await axios.post('contact/work', this.data)
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
form {
  @media (min-width: 1000px) {
    padding: 10px;
    border: theme(dark) 3px solid;
    border-radius: 10px;
  }
}
input,
select,
button,
.rodo,
textarea {
  display: block;
  font-size: 16px;
  padding: 5px 10px;
  margin: 5px 10px;
  flex-grow: 1;
  border-radius: 7px;
  min-width: 200px;
  resize: none;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}

input[type='tel'] {
  @media (min-width: 1000px) {
    min-width: 120px;
    width: 120px;
  }
}
select:required:invalid {
  color: gray;
}
option {
  color: black;
}

button {
  outline: none;
  background: theme(dark);
  color: theme(light);
  margin: 5px auto;
  padding: 8px;
}
.inputs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  svg {
    font-size: 22px;
    margin-left: 10px;
  }
}
.label {
  text-align: center;
  flex-grow: 1;
  > div {
    display: flex;
  }
  label {
    font-size: 16px;
    @media (max-width: 1000px) {
      font-size: 13px;
    }
  }
}

.sc-icons {
  margin: 5px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .icon {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background: theme(dark);
    margin: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    transition: 0.3 all;
    @media (max-width: 1000px) {
      width: 42px;
      height: 42px;
      margin: 3px;
    }
    &.picked {
      background: theme(main);
    }
    &:hover .title {
      height: 30px;
      opacity: 1;
    }
    .title {
      position: absolute;
      bottom: -32px;
      right: 50%;
      overflow: hidden;
      width: 250px;
      height: 0;
      opacity: 0;

      background: theme(dark, 0.9);
      transition: 0.2s all;
      z-index: 1;
      color: theme(light);
      border-radius: 10px;
      font-size: 16px;
      transform: translateX(50%);
      @media (min-width: 1000px) {
      }

      .padding {
        padding: 6px 10px;
      }
    }
    img {
      width: 35px;
      filter: invert(0.5) brightness(1.8);
      @media (max-width: 1000px) {
        width: 30px;
      }
    }
  }
}
</style>
