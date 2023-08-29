<template>
  <div
    data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="landing-nav w-nav"
  >
    <div class="custom-container-landing flex">
      <nuxt-link to="/" class="landing-brand w-nav-brand"
        ><img
          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
          loading="lazy"
          alt=""
          class="logo"
      /></nuxt-link>
      <ul role="list" class="nav-list landing">
        <li class="nav-link-flex">
          <nuxt-link to="/" class="nav-link active">Home</nuxt-link>
        </li>
      </ul>
      <div class="nav-logs left">
        <nuxt-link to="/login" class="nav-link btn landing">Login</nuxt-link
        ><nuxt-link to="/signup" class="nav-link btn landing color"
          >Signup</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
