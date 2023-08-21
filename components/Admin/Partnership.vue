<template>
  <div class="content-wrap w-form">
    <div class="overlay" :class="{ active: showOverlay }">
      <div class="overly-content">
        <h1 class="overlay-text">
          {{ overlayMsg }}
        </h1>
        <div class="overlay-btn-older1">
          <span class="overlay-btn w-button" @click="processUserData">Yes</span
          ><span class="overlay-btn w-button" @click="showOverlay = false"
            >No</span
          >
        </div>
      </div>
    </div>
    <div @click="showForm = !showForm" class="header-wrapper">
      <h3 class="top-heading2 promos">Partnership</h3>
      <div class="nav-icon-holder2 sm no abs">
        <img
          src="/images/caret-down.svg"
          loading="lazy"
          alt=""
          class="nav-icon2"
        />
      </div>
    </div>

    <div v-if="showForm" class="formflex partner">
      <div class="identity-section1">
        <h3 class="top-heading2 form-title">Identification</h3>
        <div class="passport-wrapper1">
          <div class="passport-partner1">
            <label for="passport" class="input-label">
              <input
                type="file"
                class="hidden w-input"
                id="passport"
                @change="setPassport"
              /><img
                src="/images/camera.svg"
                loading="lazy"
                alt=""
                class="camera1"
              />
            </label>

            <div class="passport-holder1">
              <img
                v-if="passportUrl"
                :src="`${passportUrl}`"
                loading="lazy"
                sizes="100px"
                :srcset="`
                  ${passportUrl} 500w,
                  ${passportUrl}       612w
                `"
                alt=""
                class="fill-img user"
              />
              <img
                v-else
                src="https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647f494c23b0d34b9ec5e69a_face1.jpg"
                loading="lazy"
                sizes="100px"
                srcset="
                  https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647f494c23b0d34b9ec5e69a_face1-p-500.jpg 500w,
                  https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647f494c23b0d34b9ec5e69a_face1.jpg       612w
                "
                alt=""
                class="fill-img user"
              />
            </div>
          </div>
        </div>

        <div class="each-profile-input partner">
          <div class="dasboard-select-holder full">
            <div
              class="select-head space"
              @click="showDocuments = !showDocuments"
            >
              <div>{{ documentType }}</div>
              <img
                src="/images/caret-down.svg"
                loading="lazy"
                alt=""
                class="select-icon"
              />
            </div>
            <ul
              role="list"
              class="select-list"
              :class="{ active: showDocuments }"
            >
              <li
                @click="selectDocumentType(document)"
                v-for="document in documentTypes"
                :key="document"
                class="select-lists"
              >
                <div>{{ document }}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="each-profile-input partner">
          <label for="document" class="custom-btn2 push no">
            <input
              type="file"
              class="hidden w-input"
              id="document"
              @change="setDocument"
            />
            <div class="btin-icon-holder">
              <img
                src="/images/upload.svg"
                loading="lazy"
                alt=""
                class="btn-icon"
              />
            </div>
            <div class="btn-text">Upload Your Document</div>
          </label>
        </div>
      </div>

      <h3 class="top-heading2 form-title">Personal Information</h3>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">First Name:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="firstName"
          placeholder="Enter First Name"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Middle Name:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="middleName"
          placeholder="Enter Middle Name"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Last Name:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="lastName"
          placeholder="Enter Last Name"
          id="name-5"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label phoneNumber"
          >Phone Number:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="phoneNumber"
          placeholder="Enter Phone Number"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="title" class="profile-label title1">Title:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="title"
          placeholder="E.g. Mr, Mrs, Master, Miss, Chief, etc."
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label dob">Date of Birth:</label
        ><input
          type="date"
          class="profile-input w-input"
          maxlength="256"
          v-model="dob"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label gender">Gender:</label>
        <div class="check-holder1">
          <div class="each-check-holder">
            <div class="select-box1 space" @click="gender = 'Male'">
              <div
                class="select-indicator1"
                :class="{ active: gender == 'Male' }"
              ></div>
            </div>
            <div>Male</div>
          </div>
          <div class="each-check-holder">
            <div class="select-box1 space" @click="gender = 'Female'">
              <div
                class="select-indicator1"
                :class="{ active: gender == 'Female' }"
              ></div>
            </div>
            <div>Female</div>
          </div>
          <div class="each-check-holder">
            <div class="select-box1 space" @click="gender = 'Others'">
              <div
                class="select-indicator1"
                :class="{ active: gender == 'Others' }"
              ></div>
            </div>
            <div>Others</div>
          </div>
        </div>
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Marital Status:</label>
        <div class="check-holder1">
          <div class="each-check-holder">
            <div class="select-box1 space" @click="maritalStatus = 'Single'">
              <div
                class="select-indicator1"
                :class="{ active: maritalStatus == 'Single' }"
              ></div>
            </div>
            <div>Single</div>
          </div>
          <div class="each-check-holder">
            <div class="select-box1 space" @click="maritalStatus = 'Married'">
              <div
                class="select-indicator1"
                :class="{ active: maritalStatus == 'Married' }"
              ></div>
            </div>
            <div>Married</div>
          </div>
        </div>
      </div>

      <h3 class="top-heading2 form-title">Guarantor Information</h3>
      <div class="each-profile-input partner">
        <label for="name-5" class="profile-label">Gurantor Title:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="referralTitle"
          placeholder="Eg. Mr, Mrs"
        />
      </div>

      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Gurantor Full Name:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="referralName"
          placeholder="Enter Guarantor Name"
        />
      </div>

      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Gurantor Occupation:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="referralOccupation"
          placeholder="Enter Gurantor"
        />
      </div>

      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Guarantor Phone Number:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="referralPhoneNumber"
          placeholder="Enter Guarantor Phone Number"
        />
      </div>

      <h3 class="top-heading2 form-title">Geolocation Information</h3>
      <div class="each-profile-input partner">
        <div class="dasboard-select-holder full">
          <div
            class="select-head space"
            @click="showOriginStates = !showOriginStates"
          >
            <div>{{ stateOrigin }}</div>
            <img
              src="/images/caret-down.svg"
              loading="lazy"
              alt=""
              class="select-icon"
            />
          </div>
          <ul
            role="list"
            class="select-list"
            :class="{ active: showOriginStates }"
          >
            <li
              v-for="state in states"
              :key="state._id"
              class="select-lists"
              @click="selectOriginState(state)"
            >
              <div>{{ state.name }}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="each-profile-input partner">
        <div class="dasboard-select-holder full">
          <div
            class="select-head space"
            @click="showOriginLgas = !showOriginLgas"
          >
            <div>{{ lgaOrigin }}</div>
            <img
              src="/images/caret-down.svg"
              loading="lazy"
              alt=""
              class="select-icon"
            />
          </div>
          <ul
            role="list"
            class="select-list"
            :class="{ active: showOriginLgas }"
          >
            <li
              v-for="lga in lgasOrigin"
              :key="lga"
              class="select-lists"
              @click="selectOriginLga(lga)"
            >
              <div>{{ lga }}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="each-profile-input partner">
        <label for="name-5" class="profile-label">Village of Origin:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="village"
          placeholder="Enter Village"
        />
      </div>

      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Permanent Address:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="permanentAddress"
          placeholder="Enter Permanent Address"
        />
      </div>

      <div class="each-profile-input partner">
        <div class="dasboard-select-holder full">
          <div class="select-head space" @click="showStates = !showStates">
            <div>{{ state }}</div>
            <img
              src="/images/caret-down.svg"
              loading="lazy"
              alt=""
              class="select-icon"
            />
          </div>
          <ul role="list" class="select-list" :class="{ active: showStates }">
            <li
              v-for="state in states"
              :key="state._id"
              class="select-lists"
              @click="selectState(state)"
            >
              <div>{{ state.name }}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="each-profile-input partner">
        <div class="dasboard-select-holder full">
          <div class="select-head space" @click="showLgas = !showLgas">
            <div>LGA of Residence</div>
            <img
              src="/images/caret-down.svg"
              loading="lazy"
              alt=""
              class="select-icon"
            />
          </div>
          <ul role="list" class="select-list" :class="{ active: showLgas }">
            <li
              v-for="lga in lgas"
              :key="lga"
              class="select-lists"
              @click="selectLga(lga)"
            >
              <div>{{ lga }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Landmark of Residence:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="landmark"
          placeholder="Enter Your Landmark"
        />
      </div>
      <div class="each-profile-input partner">
        <label for="name-6" class="profile-label">Street of Residence:</label
        ><input
          type="text"
          class="profile-input w-input"
          maxlength="256"
          v-model="address"
          placeholder="Enter Street Address"
        />
      </div>
      <h3 class="top-heading2 form-title">Application Information</h3>
      <div class="profile-right review full">
        <input
          type="text"
          class="profile-input report w-input"
          maxlength="256"
          v-model="applicationTitle"
          placeholder="Title of Application"
        /><textarea
          placeholder="Write your content"
          maxlength="5000"
          v-model="content"
          class="profile-input review w-input"
        ></textarea>
      </div>

      <div
        v-if="showResponse"
        class="respnse-message"
        :class="{ error: isError }"
      >
        {{ response }}
      </div>

      <div class="input-holder1">
        <div class="expense center">
          <div class="btn-holder1 space">
            <div class="custom-btn2 space" v-if="onRequest">
              <img
                src="/images/loading.svg"
                loading="lazy"
                alt=""
                class="btn-icon right loader"
              />
              <div>Processing</div>
            </div>

            <div v-else class="custom-btn2 space" @click="proceed">
              <div>Submit Application</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passport: "",
      passportUrl: "",
      document: "",
      documentType: "Select Document Type",

      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      title: "",
      dob: "",
      gender: "",
      maritalStatus: "",

      referralTitle: "",
      referralName: "",
      referralOccupation: "",
      referralPhoneNumber: "",

      stateOrigin: "State of Origin",
      lgaOrigin: "LGA of Origin",
      village: "",
      permanentAddress: "",
      lgasOrigin: [],
      showOriginStates: false,
      showOriginLgas: false,

      state: "State of Residence",
      lga: "Lga of Residence",
      landmark: "",
      address: "",
      lgas: [],
      showStates: false,
      showLgas: false,

      documentTypes: [
        "International Passport",
        "Drivers Licence",
        "National ID",
        "Voters Card",
        "Others",
      ],
      showDocuments: false,

      applicationTitle: "",
      content: "",

      states: [],

      showForm: false,

      isEditing: false,
      editingId: "",
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      showOverlay: false,
      overlayMsg: "",

      unitArray: ["1"],
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

    setHTMLDate(data) {
      const defaultDate = new Date(data);
      return defaultDate.toISOString().slice(0, 10);
    },

    selectDocumentType(doc) {
      this.documentType = doc;
      this.showDocuments = false;
    },

    selectOriginState(state) {
      this.lgaOrigin = "LGA of Origin";
      this.showOriginLgas = false;
      this.stateOrigin = state.name;
      this.lgasOrigin = state.lga;
      this.showOriginStates = false;
    },

    selectOriginLga(lga) {
      this.lgaOrigin = lga;
      this.showOriginLgas = false;
    },

    selectState(state) {
      this.lga = "Lga of Residence";
      this.showLgas = false;
      this.state = state.name;
      this.lgas = state.lga;
      this.showStates = false;
    },

    selectLga(lga) {
      this.lga = lga;
      this.showLgas = false;
    },

    setPassport(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.passport = file;
        this.passportUrl = reader.result;
      });
      reader.readAsDataURL(file);
    },

    setDocument(e) {
      this.document = e.target.files[0];
    },

    proceed() {
      this.overlayMsg = `If you are sure you have filled the fields correctly please click yes to proceed`;
      this.showOverlay = true;
    },

    populateData(data) {
      this.passport = data.passport ? data.passport : "";
      this.passportUrl = data.passportUrl;
      this.documentType = data.documentType;
      this.document = data.document;
      this.firstName = data.firstName;
      this.middleName = data.middleName;
      this.lastName = data.lastName;
      this.dob = this.setHTMLDate(data.dob);
      this.phoneNumber = data.phoneNumber;
      this.title = data.title;
      this.gender = data.gender;
      this.maritalStatus = data.maritalStatus;
      this.referralName = data.referralName;
      this.referralOccupation = data.referralOccupation;
      this.referralPhoneNumber = data.referralPhoneNumber;
      this.referralTitle = data.referralTitle;

      this.stateOrigin = data.stateOrigin;
      this.lgaOrigin = data.lgaOrigin;
      this.village = data.village;
      this.permanentAddress = data.permanentAddress;

      this.state = data.state;
      this.lga = data.lga;
      this.landmark = data.landmark;
      this.address = data.address;
      this.applicationTitle = data.applicationTitle;
      this.content = data.content;
      this.isEditing = true;
      this.editingId = data._id;
    },

    async processUserData() {
      this.showOverlay = false;
      this.onRequest = true;
      const form = new FormData();
      this.unitArray.forEach((el) => {
        form.append("passport", this.passport);
      });
      this.unitArray.forEach((el) => {
        form.append("document", this.document);
      });

      form.append("userId", this.userInfo._id);
      form.append("documentType", this.documentType);
      form.append("firstName", this.firstName);
      form.append("middleName", this.middleName);
      form.append("lastName", this.lastName);
      form.append("phoneNumber", this.phoneNumber);
      form.append("title", this.title);
      form.append("dob", new Date(this.dob).getTime());
      form.append("gender", this.gender);
      form.append("maritalStatus", this.maritalStatus);

      form.append("referralTitle", this.referralTitle);
      form.append("referralName", this.referralName);
      form.append("referralOccupation", this.referralOccupation);
      form.append("referralPhoneNumber", this.referralPhoneNumber);

      form.append("stateOrigin", this.stateOrigin);
      form.append("lgaOrigin", this.lgaOrigin);
      form.append("village", this.village);
      form.append("permanentAddress", this.permanentAddress);

      form.append("state", this.state);
      form.append("lga", this.lga);
      form.append("landmark", this.landmark);
      form.append("address", this.address);
      form.append("applicationTitle", this.applicationTitle);
      form.append("content", this.content);

      form.append("time", new Date().getTime());

      if (this.isEditing) {
        this.updateApplication(form);
      } else {
        this.createApplication(form);
      }
    },

    async updateApplication(form) {
      try {
        const result = await this.$axios.patch(
          `/users/application/${this.editingId}`,
          form
        );
        this.showResponseMsg(`The application was edited successfully`, false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async createApplication(form) {
      try {
        const result = await this.$axios.post(`/users/application`, form);
        this.showResponseMsg(result.data.message, false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async createStates() {
      const states = [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
        "Federal Capital Territory (FCT)",
      ];

      try {
        await this.$axios.post("/states", states);
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async updateProfile(form) {
      this.onRequest = true;
      try {
        const result = await this.$axios.patch(
          `/users/${this.userInfo._id}`,
          form
        );
        this.showResponseMsg("Your profile was updated successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getUser() {
      const result = await this.$axios.get(`/users/${this.userInfo._id}`);
      this.user = result.data.data;
      this.fullName = this.user.fullName;
      this.phoneNumber = this.user.phoneNumber;
      this.address = this.user.address;
      this.profilePictureUrl = this.user.profilePictureUrl;
      this.profilePicture = this.user.profilePicture;
    },

    async getStates() {
      const result = await this.$axios.get(`/states/?currentPage=1&limit=37`);
      this.states = result.data.data;
    },

    async getApplication() {
      const result = await this.$axios.get(
        `/users/application/?userId=${this.userInfo._id}`
      );

      if (result.data.data[0]) {
        this.populateData(result.data.data[0]);
      }
    },
  },
  mounted() {
    this.getStates();
    this.getApplication();
  },
  computed: {
    userInfo() {
      return this.$store.state.auth.user; // it check if user isAuthenticated
    },
  },
};
</script>
<!-- async updateState(id) {
  const form = {
    lga: [
      "Abaji",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali",
      "Municipal Area Council (AMAC)",
    ],
  };

  try {
    await this.$axios.patch(`/states/${id}`, form);
  } catch (err) {
    console.log(err.response.data);
  }
}, -->

<style>
.dashboard2.profile {
  overflow: clip;
}

.header-wrapper {
  position: relative;
  cursor: pointer;
}

.select-lists {
  cursor: pointer;
}

.nav-icon-holder2.sm.no.abs {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>
