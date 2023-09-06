<template>
  <div class="aside-post">
    <div class="aside-card w-form">
      <div class="aside-flex">
        <div class="newsletter-wrap pro blo">
          <ul role="list" class="blog-search">
            <li>
              <a href="#" class="blog-list w-inline-block"><div>This is</div></a
              ><a href="#" class="blog-list w-inline-block"
                ><div>This is some text inside of a div block.</div></a
              >
            </li>
          </ul>
          <input
            type="text"
            class="newsletter-input search w-input"
            maxlength="256"
            name="name-15"
            data-name="Name 15"
            placeholder="Search Product"
            id="name-15"
          /><img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b75aa41127b73bc77763cb_search-line-icon%201.svg"
            loading="lazy"
            alt=""
            class="newsletter-img"
          />
        </div>
        <div class="aside-wrap">
          <h1 class="post-title aside">Latest Posts</h1>
          <div v-for="blog in blogs" :key="blog._id" class="each-aside">
            <div class="aside-bg">
              <img
                :src="blog.bannerUrl"
                loading="lazy"
                alt=""
                sizes="90px"
                :srcset="`
                  ${blog.bannerUrl} 500w,
                  ${blog.bannerUrl} 800w,
                  ${blog.bannerUrl}       953w`"
                class="responsive-img"
              />
            </div>
            <div class="each-aside-holder">
              <span @click="selectBlog(blog)" class="aside-title">{{
                blog.title
              }}</span>
              <div class="blog-date">{{ formatDate(blog.time) }}</div>
            </div>
          </div>
        </div>

        <div class="aside-wrap">
          <h1 class="post-title aside">Tutorial Posts</h1>
          <div v-for="blog in blogTutorials" :key="blog._id" class="each-aside">
            <div class="aside-bg">
              <img
                :src="blog.bannerUrl"
                loading="lazy"
                alt=""
                sizes="90px"
                :srcset="`
                  ${blog.bannerUrl} 500w,
                  ${blog.bannerUrl} 800w,
                  ${blog.bannerUrl}       953w`"
                class="responsive-img"
              />
            </div>
            <div class="each-aside-holder">
              <span @click="selectBlog(blog)" class="aside-title">{{
                blog.title
              }}</span>
              <div class="blog-date">{{ formatDate(blog.time) }}</div>
            </div>
          </div>
        </div>
        <div class="aside-wrap">
          <h1 class="post-title aside">Tags Posts</h1>
          <a href="#" class="post-tag">Text Link</a
          ><a href="#" class="post-tag">Text Link</a
          ><a href="#" class="post-tag">Text Link</a
          ><a href="#" class="post-tag">Text Link</a
          ><a href="#" class="post-tag">Text Link</a
          ><a href="#" class="post-tag">Text Link</a>
        </div>
      </div>
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

    selectBlog(blog) {
      this.$store.commit("SELECT_BLOG", blog);
      this.$router.push("/blog-details");
    },
  },
  computed: {
    blogTutorials() {
      return this.$store.state.blogTutorials;
    },

    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>

<style></style>
