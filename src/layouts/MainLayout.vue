<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9">
        <q-avatar square size="md">
          <img alt="FlowLauncher Logo" src="/images/logo.svg" />
        </q-avatar>

        <q-toolbar-title> FlowLauncher </q-toolbar-title>

        <q-btn
          size="sm"
          flat
          stretch
          icon="mdi-github"
          type="a"
          href="https://github.com/Flow-Launcher/Flow.Launcher"
        >
          &nbsp;Flow-Launcher/Flow.Launcher
        </q-btn>
      </q-toolbar>

      <q-toolbar class="bg-secondary shadow-8">
        <q-tabs align="left" inline-label>
          <q-tab
            icon="mdi-home"
            label="Start"
            @click="scrollToElement('home')"
          />
          <q-tab
            icon="mdi-cogs"
            label="Features"
            @click="scrollToElement('features')"
          />
          <q-tab
            icon="mdi-download"
            label="Download"
            @click="scrollToElement('download')"
          />
          <q-route-tab
            icon="mdi-file-document"
            label="Document"
            to="/docs"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-toolbar class="row bg-grey-10 text-grey-4 shadow-up-4">
      <q-space />
      <div class="col-md-2 text-center col-xs-6">
        The FlowLauncher Team © 2020
      </div>
      <q-space />
    </q-toolbar>
  </q-layout>
</template>

<script>
import { scroll } from "quasar";

const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: "MainLayout",
  methods: {
    scrollToElement(el) {
      const element = document.getElementById(el);
      const target = getScrollTarget(element);
      const offset = element.offsetTop;
      const duration = 600;
      setScrollPosition(target, offset, duration);
    },
  },
};
</script>
