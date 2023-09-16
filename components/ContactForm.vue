<template>
  <div class="contact-block w-form">
    <div class="contact-flex">
      <div class="each-footer contact">
        <a href="#" class="brand w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
            loading="lazy"
            alt=""
            class="logo"
        /></a>
        <div v-if="company" class="company-det">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e374c7f046a3ee2a3d3_map-pin-point-icon%201.svg"
            loading="lazy"
            alt=""
            class="icon h"
          />
          <div class="company-det-text">
            {{ company.contact[0] }}
          </div>
        </div>
        <div v-if="company" class="company-det">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3792eeacec8da6815d_email-icon%201.svg"
            loading="lazy"
            alt=""
            class="icon sm"
          />
          <div class="company-det-text">{{ company.systemEmail }}</div>
        </div>
        <div class="company-det">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e37b44da70d864f43c8_phone-outline-icon%201.svg"
            loading="lazy"
            alt=""
            class="icon sm"
          />
          <div class="company-det-text bg">{{ company.contact[2] }}</div>
        </div>
        <div class="company-det">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3742421ae3cb6680e1_clock-line-icon%201.svg"
            loading="lazy"
            alt=""
            class="icon sm"
          />
          <div class="company-det-text">24/7 6:00AM - 6:00PM</div>
        </div>
      </div>
      <div class="right-contact">
        <div class="each-input">
          <label for="name-21" class="label">Name</label
          ><input
            type="text"
            class="custom-input w-input"
            v-model="name"
            placeholder="Enter your name"
          />
        </div>
        <div class="each-input">
          <label for="name-21" class="label">Email</label
          ><input
            type="text"
            class="custom-input w-input"
            v-model="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="each-input">
          <label for="field-6" class="label">Message</label
          ><textarea
            placeholder="Enter your message"
            maxlength="5000"
            v-model="message"
            class="custom-input txt w-input"
          ></textarea>
        </div>
        <div class="btn-holder">
          <div v-if="onRequest" class="custom-btn edge">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
              loading="lazy"
              alt=""
              class="btn-icon spinner"
            />
            <div>Processing</div>
          </div>
          <div v-else @click="processForm" class="custom-btn edge color">
            <div>Submit</div>
          </div>

          <label
            for="field-7"
            class="response msg"
            :class="{ error: isError }"
            >{{ errMessage }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isError: false,
      onRequest: false,
      errMessage: "",
    };
  },
  methods: {
    validateEmail() {
      if (
        this.email == "" ||
        !this.email ||
        !/^\S+@\S+\.\S+$/.test(this.email)
      ) {
        this.errMessage = "Please enter a valid email";
        this.isError = true;
        return;
      } else {
        this.errMessage = "";
        this.isError = false;
      }
    },

    clearInputs() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.errMessage = "";
      this.isError = false;
    },

    checkResponse(result) {
      this.onRequest = false;

      if (result.status == 200) {
        this.errMessage =
          "Message sent successfull, you will receive reply through the email you provided.";
        setTimeout(() => {
          this.clearInputs();
        }, 10000);
      } else {
        this.isError = true;
        this.errMessage = "Sorry, something went wrong please try again.";
      }
    },

    async processForm() {
      this.validateEmail();
      if (this.isError) {
        return;
      }

      this.onRequest = true;
      const form = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      const result = await this.$store.dispatch("MESSAGE", form);

      this.checkResponse(result);
    },
  },
  computed: {
    company() {
      return this.$store.state.company;
    },
  },
};
</script>

<style></style>
