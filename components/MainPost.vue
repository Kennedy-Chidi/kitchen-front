<template>
  <div class="main-post">
    <div
      v-for="blog in blogs"
      :key="blog._id"
      class="prod-detail-flex post each"
    >
      <nuxt-link :to="`blog-details/${blog._id}`" class="post-title">
        {{ blog.title }}
      </nuxt-link>
      <div class="main-product-img banner each">
        <img
          :src="blog.bannerUrl"
          loading="lazy"
          alt=""
          class="responsive-img"
        />
      </div>
      <div class="comment-actions post">
        <div class="comment-action post">
          <div>{{ blog.author }}</div>
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b723f3d015e9b5d2fcbc62_profile.svg"
            loading="lazy"
            alt=""
            class="comment-act"
          />
        </div>
        <div class="comment-action post">
          <div>25t, july 2023</div>
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3742421ae3cb6680e1_clock-line-icon%201.svg"
            loading="lazy"
            alt=""
            class="comment-act"
          />
        </div>
        <div class="comment-action">
          <div>56</div>
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84d212e330d5af9503296_delete.svg"
            loading="lazy"
            alt=""
            class="comment-act"
          />
        </div>
      </div>
    </div>

    <div class="pagination">
      <div class="page-result">
        <h3 class="page-result-txt">Results: 20, Page 1 of 5</h3>
      </div>
      <ul role="list" class="pagination-list">
        <li class="page">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72debe03037906a74116a_thin-chevron-arrow-left-icon%201.svg"
            loading="lazy"
            alt=""
            class="page-icon"
          />
        </li>
        <li class="page"><div>1</div></li>
        <li class="page active"><div>2</div></li>
        <li class="page"><div>3</div></li>
        <li class="page">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72deb58cf5ff7bacff87c_thin-chevron-arrow-left-icon%202.svg"
            loading="lazy"
            alt=""
            class="page-icon"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
  },

  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>

<style></style>
