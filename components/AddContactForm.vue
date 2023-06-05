<template>
  <div>
    <v-divider
      :thickness="13"
      class="border-opacity-100"
      color="blue"
    ></v-divider>
    <v-form>
      <form>
        <v-text-field
          v-model="newContactForm.name"
          label="First and last name"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="newContactForm.email"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="newContactForm.phoneNumber"
          label="Phone Number"
          required
        ></v-text-field>
        <v-select
          v-model="newContactForm.availability"
          :items="items"
          label="Availability"
          required
        >
          <v-option v-for="item in items" :key="item">{{ item }}</v-option>
        </v-select>
        <v-checkbox
          v-model="checkbox"
          label="Are you ready?"
          required
        ></v-checkbox>
        <v-btn class="mr-4 success" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </v-form>
  </div>
</template>

<script>
const generateNewContactForm = () => {
  return {
    name: '',
    email: '',
    phoneNumber: '',
    availability: '',
  }
}
export default {
  name: 'ContactForm',
  data: () => {
    return {
      select: null,
      items: [
        'Morning between 10:00am to 12:00pm',
        'Afternoon between 13:00pm to 15:00pm',
        'Both',
      ],
      checkbox: false,
      newContactForm: generateNewContactForm(),
    }
  },
  methods: {
    submit() {
      this.$emit('created', this.newContactForm)
      this.newContactForm = generateNewContactForm();
    },
    clear() {
      this.newContactForm = generateNewContactForm();
    },
  },
}
</script>

<style scoped></style>
