<template>
  <div class="home">
    <div class="hero">
      <div class="herocont">
        <div class="desccont">
          <div class="desc">
            <div class="ifflex">
              <div class="red">Opłaty powinny być {{}}</div>
              <div class="red">niskie i proste</div>
            </div>
            <div>Tak samo z resztą jak podatki, ale żyjemy w Polsce.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tax">
        <div>Cennik za lewe korki</div>
        Za legitne pewnie zapłacisz więcej
      </div>
      <div>
        U nas nie ma miejsca na długie formalności i skomplikowane procedury.
        Obowiązuje jedna uniwersalna opłata za każdą godzinę korepetycji (50-60
        minut). Musimy jednak mimo wszystko pobierać dodatkową opłatę za dojazd.
      </div>
      <div class="table">
        <div class="row">
          <div class="c">Online</div>
          <div class="c b">Stacjonarnie</div>
          <div class="c">Stacjonarnie (dojazd do ucznia)</div>
        </div>
        <div class="row b">
          <div class="c">60zł / h</div>
          <div class="c b">60zł / h</div>
          <div class="c">75zł / h</div>
        </div>
      </div>
      <section>
        Korepetycje online odbywają się na ustalonej przez ucznia i korepetytora
        platformie w formie rozmowy online.
      </section>
      <section>
        Korepetycje stacjonarne odbywają się albo w miejscu wyznaczonym przez
        korepetytora (np. biblioteka lub jego mieszkanie) albo w miejscu
        wyznaczonym przez ucznia (w tym przypadku występuje opłata 15 zł).
      </section>
      <section>
        Korepetycje mogą odbywać się w formie hybrydowej, czasami online czasami
        stacjonarnie w zależności od ustaleń.
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    document.title = 'Cennik | Lewe Korki'
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

.container {
  font-size: 18px;
  max-width: 1000px;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 15.5px;
  }
}

section {
  margin: 10px 0;
  @media (max-width: 1000px) {
    margin: 7px 0;
  }
}

.tax {
  margin: 10px 0;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
  div {
    display: block;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 500;
  }
}

.table {
  display: flex;
  justify-content: space-between;
  background: theme(dark_gray, 0.2);
  border-radius: 10px;
  margin: 20px 0;
  padding: 3px 0;
  @media (max-width: 1000px) {
    margin: 10px 0;
  }
  .row {
    flex-grow: 1;
    .c {
      padding: 12px 20px;
      @media (max-width: 1000px) {
        padding: 10px 12px;
      }
    }
    .b {
      background: theme(dark_gray, 0.15);
    }
  }
}

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
  background-image: url('~@/assets/hero/prices.jpg');
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  @media (max-width: 1000px) {
    height: 50vh;
  }
}

.herocont {
  width: 100%;
  height: 100%;
  background: theme(black, 0.7);
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
    font-size: 70px;
    font-weight: 700;
    text-shadow: 0px 0px 15px theme(dark);
    @media (max-width: 1000px) {
      line-height: 30px;
      font-size: 36px;
    }
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
