<template>
  <v-container fluid> 
    <v-row>
    <v-form> 
        <v-text-field
          v-model="newProduct.name"
          label="Product name"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="newProduct.price"
          label="Product price"
          required
        ></v-text-field>
        <textarea v-model="newProduct.description" rows="4" cols="80"
         placeholder="Product Description"></textarea>
          
        <v-btn class="mr-4 success" @click="submit"> Add product </v-btn>
        <v-btn class="mr-4 error" @click="clear"> clear </v-btn>
     
      </v-form> 
    </v-row>
  </v-container>  
</template>

<script>
const generateNewProduct = () => {
  return {
    name: '',
    price: '',
    description: '', 
  }
}
export default {
  name: 'AddProduct',
  data: () => {
    return { 
      newProduct: generateNewProduct(),
    }
  },
  methods: {
    submit() {
      this.$emit('created', this.newProduct)
      this.newProduct = generateNewProduct()
    },
    clear() {
      this.newProduct = generateNewProduct()
    },
  },
}
</script>

<style scoped></style>
