<template>
  <q-page>
    <q-parallax id="home" class="row shadow-4" src="/images/backdrop.jpg">
      <div class="col-7">
      <q-card class="bg-grey-9 q-pa-xs shadow-4" bordered>
        <div class="row col-12">
          <q-input class="text-h4 q-pl-md col-11" v-model="query" dark borderless></q-input>
          <q-icon color="grey-7" size="xl" class="q-pt-xs col-1" name="mdi-magnify"></q-icon>
        </div>

        <a
          style="text-decoration:none; cursor:default;"
          v-for="(result, key) in results"
          v-bind:key="result.title"
          :href="result.link"
          class="row col-12 q-pa-xs hover-effect"
          >

          <q-avatar
            v-if='result.color'
            square
            size="md"
            class="q-pt-xs"
            v-bind:style="{'background-color': result.color}"
            >
          </q-avatar>

          <q-avatar v-else square size="md" class="q-pt-xs">
            <img :alt="result.title" :src="result.icon">
          </q-avatar>

          <div class="row col text-white q-pl-sm">
            <div class="text-weight-bold col-11">{{result.title}}</div>
            <div class="col-1 text-right text-grey-4">Alt+{{key+1}}</div>
            <div class="text-grey-4">{{result.subtitle}}</div>
          </div>
        </a>
      </q-card>
      </div>
    </q-parallax>

    <div class="row q-pt-xl">
      <q-space />
      <div class="row col-md-2 col-xs-12 q-pa-md">
        <img class="col-12" alt="Logo" src="/images/flow_extended_logo.png">
      </div>
      <article class="col-md-2 col-xs-12 text-left q-pa-md text-justify">
        <p>
          Dedicated to make your workflow flow more seamlessly.
          Aimed at being more than an app launcher, it searches,
          integrates and expands on functionalities.
        </p>
        <p>
          Flow will continue to evolve, designed to be open and built with
          the community at heart.
        </p>
        <p>
          This Project is under heavy development, but the code base is stable, so
          contributions are very welcome. If you would like to help maintain
          it, please do not hesistate to get in touch.
        </p>
      </article>
      <q-space />
    </div>
    <div
      class="row bg-primary text-white q-py-xl shadow-up-4"
      id="features"
    >
      <q-space />
      <div
        v-for="feature in features"
        v-bind:key="feature.title"
        class="column col-md-3 col-xs-12 q-pb-md text-center"
      >
        <div class="col-8">
          <q-icon
            size="100px"
            :name="feature.icon"
            color="white"
          />
        </div>
        <div class="text-h5 col-2">
          {{feature.title}}
        </div>
        <div class="col-1">
          {{feature.subtitle}}
        </div>
      </div>
      <q-space />
    </div>

    <div id="download" class="row q-py-xl">
      <q-space />
        <div class="text-center">
            <div class="text-h3 text-grey-8 q-pb-md">
              Optimize your Work<strong>Flow</strong>!
            </div>
          <q-btn
            type="a"
            href="https://github.com/Flow-Launcher/Flow.Launcher/releases"
            icon="mdi-github"
            size="lg"
            color="secondary">
            &nbsp;Download from GitHub
          </q-btn>
          <p class="text-caption">
            <strong>Flow</strong> is only available for Windows™ 7 and Newer
          </p>
        </div>
      <q-space />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      query: 'FlowLauncher',
      possible_results: [
        {
          icon: '/images/logo.svg',
          title: 'FlowLauncher - a launcher for Windows',
          subtitle: 'Boost your productivity!',
          link: '',
          color: '',
        },
        {
          icon: '/images/logo.svg',
          title: 'FlowLauncher - Features',
          subtitle: 'Explore the possibilities!',
          link: '',
          color: '',
        },
        {
          icon: '/images/logo.svg',
          title: 'FlowLauncher - Download',
          subtitle: 'Download from GitHub!',
          link: 'https://github.com/Flow-Launcher/Flow.Launcher/releases',
          color: '',
        },
        {
          icon: '/images/logo.svg',
          title: 'FlowLauncher - Trouble?',
          subtitle: 'Report an Issue!',
          link: 'https://github.com/Flow-Launcher/Flow.Launcher/issues',
          color: '',
        },
      ],
      features: [
        {
          icon: 'mdi-magnify', title: 'Search Everything', subtitle: 'Application, Files, Bookmarks, Youtube and more!',
        },
        {
          icon: 'mdi-toy-brick', title: 'Plugin Suppport', subtitle: 'Extend your Flow experience with a variety of Plugins!',
        },
        {
          icon: 'mdi-console-line', title: 'Native Shell Support', subtitle: 'Execute (Power)Shell commands directly with FlowLauncher!',
        },
      ],
    };
  },
  computed: {
    results() {
      const resultList = [];

      if (this.query.trim() === '') {
        return resultList;
      }

      const mathRegex = /^(?:\d+|\+|-|\/|\*|\(|\))*$/gm;
      if (this.query.match(mathRegex)) {
        const mathString = this.query.replace(/[^-()\d/*+.]/g, '');

        resultList.push(
          {
            // eslint-disable-next-line no-eval
            icon: '/images/calculator.png', title: eval(mathString), subtitle: 'Calculated from your expression', link: '', color: '',
          },
        );
      }

      const colorRegex = /^#[a-fA-F0-9]{6}$/gm;
      if (this.query.match(colorRegex)) {
        resultList.push(
          {
            icon: '', title: this.query, subtitle: '', link: '', color: this.query,
          },
        );
      }

      const terms = this.query.split(' ');
      if (terms[0] === 'g') {
        if (terms.length < 2) {
          return [
            {
              icon: '/images/google.png', title: 'Search Google', subtitle: '', link: '', color: '',
            },
          ];
        }
        return [
          {
            icon: '/images/google.png', title: terms[1], subtitle: 'Search Google', link: `https://www.google.com/search?q=${terms[1]}`, color: '',
          },
        ];
      }

      if (terms[0] === 'wiki') {
        if (terms.length < 2) {
          return [
            {
              icon: '/images/wiki.png', title: 'Search Wikipedia', subtitle: '', link: '', color: '',
            },
          ];
        }
        return [
          {
            icon: '/images/wiki.png', title: terms[1], subtitle: 'Search Wikipedia', link: `https://wikipedia.org/w/index.php?search=${terms[0]}`, color: '',
          },
        ];
      }

      this.possible_results.forEach((possibleResult) => {
        if (resultList.length < 4) {
          if (possibleResult.title.toLowerCase().includes(this.query.toLowerCase())) {
            resultList.push(possibleResult);
          }
        }
      });
      return resultList;
    },
  },
};
</script>

<style>
.hover-effect:hover {
  background-color:#757575;
}
</style>
