<template>
  <div class="grace about">
    <alert-box />
    <alert-confirmation />
    <div class="main-body">
      <vertical-nav />
      <div class="main-flex">
        <company-ads />
        <horizontal-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="w-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  data-name="Email Form 2"
                  method="get"
                  class="transaction-table"
                  data-wf-page-id="64b6be9c94ade9f930694692"
                  data-wf-element-id="daac88a8-82be-bb13-da88-00ed758a8ac6"
                >
                  <div class="table-head ban">
                    <div class="about-flex">
                      <div class="video-holder">
                        <div
                          style="padding-top: 56.17021276595745%"
                          class="w-video w-embed"
                        >
                          <iframe
                            class="embedly-embed"
                            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                            scrolling="no"
                            allowfullscreen
                            title="Imagine for 1 Minute"
                          ></iframe>
                        </div>
                      </div>
                      <div class="video-holder">
                        <div
                          style="padding-top: 56.17021276595745%"
                          class="w-video w-embed"
                        >
                          <iframe
                            class="embedly-embed"
                            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                            scrolling="no"
                            allowfullscreen
                            title="Imagine for 1 Minute"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="each-input full">
                      <label for="field-6" class="label"
                        >Essence of Application</label
                      ><textarea
                        placeholder="Example Text"
                        maxlength="5000"
                        id="field-5"
                        name="field-5"
                        data-name="Field 5"
                        class="custom-input txt high w-input"
                      ></textarea>
                    </div>
                    <div class="btn-holder">
                      <div class="custom-btn edge color">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Processingg</div>
                      </div>
                      <div class="custom-btn edge color">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Image</div>
                      </div>
                      <div class="custom-btn edge color">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Video</div>
                      </div>
                      <div class="custom-btn edge color"><div>Save</div></div>
                    </div>
                    <label for="field-6" class="response error"
                      >Sorry, something went wrong</label
                    >
                  </div>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      content: "",
      certificate: "",
      certificateUrl: "",
      cert: "",
      about: "",
      video: "",
      videoUrl: "",

      editingState: false,
      editingId: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,
    };
  },
  methods: {
    showResponseMsg(msg, status) {
      this.response = msg;
      this.isError = status;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    setCertificate(event) {
      this.cert = event.target.files[0];
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.certificate = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    setVideo(e) {
      this.video = e.target.files[0];
    },

    populateData(data) {
      this.video = data.video;
      this.videoUrl = data.videoUrl;
      this.certificate = data.certificateUrl;
      this.cert = data.certificate;
      this.content = data.content;
    },

    processAbout() {
      this.onRequest = true;
      const singular = [1];
      const form = new FormData();
      form.append("content", this.content);
      singular.forEach((element) => {
        form.append("certificate", this.cert);
        form.append("video", this.video);
      });

      if (this.editState) {
        this.updateAbout(form);
      } else {
        this.saveAbout(form);
      }
    },

    async getAboutCompany() {
      try {
        const result = await this.$axios.get("/about");
        if (result.data.data) {
          this.editState = true;
          this.editingId = result.data.data._id;
        }
        this.populateData(result.data.data);
      } catch (err) {
        console.log(err);
      }
    },

    async saveAbout(form) {
      try {
        const result = await this.$axios.post(`/about`, form);
        this.showResponseMsg("About created successfully", false);
        this.populateData(result.data.data);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async updateAbout(form) {
      try {
        const result = await this.$axios.patch(
          `/about/${this.editingId}`,
          form
        );
        this.showResponseMsg("Company profile updated successfully", false);
        this.populateData(result.data.data);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },
  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },
  },

  mounted() {
    this.getAboutCompany();
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
    AlertBox,
    AlertConfirmation,
    FooterComponent,
    MobileBottomNav,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
  },
};
</script>

<style></style>
