<template>
    <v-container>  
        <router-link to="../products">Back to list</router-link>
        <ProductList :value="givenProduct" @saveData="enregistrement"></ProductList>  
        <DeleteButton @click="remove(givenProduct)" ></DeleteButton>   
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex';
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from '~/store/firebase.js';

import ProductList from '~/components/ProductList.vue';
import DeleteButton from '~/components/buttons/DeleteButton.vue'; 
export default {
    
    data() {
        return {};
    },
    components: {ProductList, DeleteButton },
    computed: {
        ...mapGetters('products',[
            'products'
        ]),
        givenProductId() {
            return this.$route.params?.id;
        },
        givenProduct () {
            return this.products[this.givenProductId] || {}
        }
    },
 methods: {
    async enregistrement(product) {  
            // ... update product code
            const productId = product.id; 
            try {
                await updateDoc(doc(db, "products", productId), product);
                
      // Add more fields to update as needed
                // update operation successful 
                alert("Update operation successful"); 
            } catch (error) {
                // Handle the error if the update operation fails
                console.error("Error updating product:", error);
            }
            this.$router.push("/products/");
          },

    async remove(givenProduct) {
        const productId = givenProduct.id;
    
        try {
        await deleteDoc(doc(db, "products", productId));
        // Delete operation successful 
        alert("Delete operation successful");
        this.$router.push("/");
        } catch (error) {
        // Handle the error if the delete operation fails
        console.error("Error deleting product:", error);
        }
    }
}

}
</script>

 