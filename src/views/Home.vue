<template>
  <div class="home">
    <div class="hero">
      <div class="herocont">
        <div class="desccont">
          <div class="desc">
            <div class="ifflex">
              <div class="red">Masz problemy {{}}</div>
              <div class="red">z nauką?</div>
            </div>
            <div class="ifflex">
              <div>
                Tworzymy grupę świadczącą wątpliwej jakości korki w całej
                Polsce. {{}}
              </div>
              <div>
                Dla nas nauczenie Ciebie to jak napad na bank - codzienność.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="check">
      <div class="about">
        <span class="aboutbigstudent">Jesteśmy grupą studentów</span>, których
        łączy jeden wspólny cel - rozprowadzać edukację w każdej możliwej
        ilości. Nie znajdziesz tu sztywniaków, którzy odhaczą lekcję i zaraz
        przepuszczą twój hajs na piwo. Nauka jest dla nas czymś więcej niż
        zarobkiem, jest pasją. Mamy luźną atmosferę i
        <span class="remove">kompetentnych</span>
        ludzi, którzy wiedzą jak się za naukę zabrać.
      </div>
      <div class="about right">
        Większość z nas napisała nasze
        <span class="aboutbig"> matury na ponad 90%</span>
        dostając się na najbardziej oblegane uczelnie w Polsce. Politechnika
        Warszawska, Uniwersytet Jagielloński czy AGH to tylko początek naszych
        wpływów. Prędzej czy później obejmiemy działaniem całą Polskę i każdą
        uczelnię.
      </div>
      <div class="about">
        Nie tworzymy korporacji - my
        <span class="aboutbig">działamy razem</span>. Możesz w każdej chwili się
        do nas odezwać z prośbą o pomoc czy śmiesznym memem. Jesteśmy do twojej
        dyspozycji. Nie jako smutni panowie w garniturach, których trzeba
        traktować jak profesorów. Jesteśmy żywymi, młodymi i dynamicznymi
        ludźmi, takimi jak ty.
      </div>
      <div class="about">
        I co najważniejsze, nie zedrzemy z ciebie wszystkich pieniędzy. Nawet
        mafia ma swoje zasady.
      </div>
      <!-- <div class="whatabout">
        <div>To jak będzie?</div>
      </div> -->

      <!-- <div class="button">Sprawdź naszą ofertę</div>
      <div class="button">Omów się na korki</div>
      <div class="button">Poznaj naszych korepetytorów</div> -->
    </div>
    <div class="hero hero2">
      <div class="herocont">
        <div>
          <div class="desccont big">
            Nie czekaj, napisz do nas już dziś!
            <div class="blocks">
              <router-link to="/umowsie">Umów się na korki</router-link>
              <router-link to="/oferta">Sprawdź naszą ofertę</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  mounted() {
    document.title = 'Lewe Korki'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
.itsme {
  font-size: 35px;
  color: theme(light);
  background: theme(dark);
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
}
.hero {
  background-image: url('~@/assets/hero.jpeg');
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  &.hero2 {
    background-image: url('~@/assets/hero2.jpg');
  }
}

.herocont {
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.desccont {
  color: theme(light);
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  font-size: 25px;
  max-width: 1000px;
  padding: 30px 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  &.big {
    font-size: 35px;
    flex-direction: column;
    text-align: center;
    @media (max-width: 1000px) {
      font-size: 25px;
    }
  }
  .red {
    color: theme(main_light);
    font-size: 85px;
    font-weight: 700;
    @media (max-width: 1000px) {
      line-height: 30px;
      font-size: 36px;
    }
  }
}

.check {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0;
}

.about {
  max-width: 1100px;
  font-size: 20.5px;
  padding: 10px;
  margin: 10px 0;
  &.right {
    @media (min-width: 1000px) {
      text-align: right;
    }
  }
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
.aboutbig,
.aboutbigstudent {
  font-size: 33px;
  text-transform: uppercase;
  font-weight: 500;
}
.aboutbigstudent {
  @media (max-width: 1000px) {
    font-size: 22px;
  }
}

.aboutbig {
  @media (max-width: 1000px) {
    font-size: unset;
  }
}
.remove {
  text-decoration: line-through;
}

.whatabout {
  text-align: right;
  > div {
    color: theme(main_light);
    background: linear-gradient(90deg, theme(main_light), theme(main));
    background-clip: text;
    -webkit-text-fill-color: transparent;

    display: inline-block;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 55px;
    max-width: 1000px;
    padding: 0px 0;
    @media (max-width: 1000px) {
      line-height: 40px;
      margin-bottom: 10px;
      font-size: 43px;
    }
  }
}

.blocks {
  margin: 5px 0;
}

a {
  display: block;
  background: theme(main_light, 0.6);
  color: theme(light);
  padding: 15px 30px;
  font-size: 25px;
  text-transform: uppercase;
  margin: 11px 0;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 12px 15px;
  }
}

.ifflex {
  @media (max-width: 1000px) {
    > div {
      display: inline;
    }
    margin-bottom: 10px;
  }
}
</style>
