<template>
  <div class="home" v-if="Object.values(course)?.length > 0">
    <header>
      <div
        class="play"
        :style="{
          backgroundImage: `url(${require('@/assets/courses/' +
            course.id +
            '.jpg')})`,
        }"
      />
      <div class="head">
        <div class="title" v-html="course.title" />
        <div class="level" v-html="course.level" />
        <div class="prices">
          <div class="buy"><ic icon="cart-shopping" /> Zamów</div>
          <div>
            <div v-for="(price, index) in course.prices" :key="index">
              {{ buytime[index] }}: {{ price }}zł
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="big">Treść</div>
      <div v-html="course.desc" class="element" />

      <div class="big">Plan kursu</div>
      <div class="plan">
        <div v-for="(section, index) in course.content" :key="index">
          <div class="sectionname">
            <span v-html="index" />
            <span class="h" v-html="`${section.h}h`" />
          </div>
          <div
            v-for="(lesson, index) in section.content"
            :key="lesson"
            v-html="lesson"
            class="element"
            :class="{ odd: index % 2 == 1 }"
          />
        </div>
      </div>
      <div class="big">Autorzy</div>
      <!-- {{ course.authors }} -->
      <div class="authors">
        <router-link
          :to="`/korepetytorzy?tutor=${author.name}`"
          class="author"
          v-for="author in course.authors"
          :key="author"
        >
          <div class="name" v-html="author.name" />
          <div class="major">
            <div class="title" v-html="author.majors[0].name" />
            <div class="university" v-html="author.majors[0].university" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import courses from '@/data/courses'

export default defineComponent({
  data() {
    return {
      course: {},
      courses,
      buytime: ['Miesiąc', 'Semestr', 'Rok'],
    }
  },
  mounted() {
    const course = this.courses.find((e) => e.id == this.$route.params.id)
    this.course = course ? course : this.$router.push('/404')
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
  max-width: 1100px;
  margin: 0 auto;
}

header {
  width: 100%;
  display: flex;
  text-align: right;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;

  .title {
    font-family: 'Mooli';
    font-size: 50px;
    font-weight: bold;
  }

  .level {
    font-size: 25px;
  }
}

.play {
  width: 480px;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  @media (max-width: 1000px) {
    width: 100%;
    height: 200px;
    border-radius: 0px;
  }
}

.buy {
  font-size: 18px;
  display: inline-block;
  padding: 8px 16px;
  margin: 10px 0;
  color: theme(light);
  background: theme(main_dark);
  border-radius: 7px;
}

.sectionname {
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
}

.big {
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 22px;
    padding: 5px 0;
  }
}

.head {
  @media (max-width: 1000px) {
    text-align: left;
    padding: 10px;
    flex-grow: 1;
    .title {
      font-size: 35px;
    }
    .level {
      font-size: 18px;
    }
  }
}
.container {
  padding: 10px;
}

.prices {
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}

.plan {
  background: theme(light);
  border-radius: 10px;
  overflow: hidden;
  .odd {
    background: theme(gray);
  }

  .sectionname {
    background: theme(dark);
    padding: 10px;
    color: theme(light);
    display: flex;
    justify-content: space-between;
  }

  .element {
    padding: 10px;
    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }

  .h {
    margin-left: 5px;
  }
}

.authors {
  display: flex;
}

.author {
  padding: 10px;
  flex-grow: 1;
  border: 3px solid theme(gray);
  border-radius: 10px;
  transition: 0.2s all;
  margin: 0 5px;
  &:hover {
    border-color: theme(main);
  }
  .name {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 5px;
    padding-bottom: 2px;
    border-bottom: 2px solid theme(gray);
    max-width: 300px;
  }
  .title {
    font-size: 18px;
  }
  .university {
    color: theme(dark_gray);
    font-style: italic;
  }
}
</style>
