<template>
  <div class="containers extra">
    <section class="positioning"></section>
    <div class="donate_first_sec">
      <div class="donate_first_texts">
        <h2 class="donate-title">End hunger and poverty by creating a lasting impact this summer</h2>
        <div class="yellow_block"></div>
        <p class="donate-text">Thank you for your ongoing support to Heifer International. Your monthly donation to Heifer 
          supports the international programs that need it most. Your donation:</p>
        <ul class="donate-items">
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><h5 class="line">Provides sustaining support throughout the year to families in need.</h5></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><h5 class="line">Helps us to plan ahead and respond to urgent needs.</h5></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><h5 class="line">Creates lasting change for years to come.</h5></li>
        </ul>
      </div>

      <div class="form_container">  
          <div class="form_background">
            <h3 class="donation_form_title">Donation</h3>
            <form action="" method="post" class="form-group">
              <div v-show="step === 1">
                <div class="step_bar">
                <p class="bold">donation</p><hr><p>shipping</p><hr><p>payment</p>
                </div>
                <h5 class="form_info">YOUR INFORMATION</h5>
                <label for="first_name">First name</label>
                <input id="first_name" class="form-control" name="first_name" v-model="first_name" placeholder="your first name">
                <label for="last_name">Last name</label>
                <input id="last_name" class="form-control" name="last_name" v-model="last_name" placeholder="your last name">   
                <label for="email">E-mail:</label>
                <input id="email" class="form-control" name="email" type="email" v-model="email" placeholder="email@email.com">
                <h5 class="form_info_2">Choose an amount to give each month of the spring-summer</h5>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" class="btn btn-light" v-on:click="latestType = '$10/month'" data-bs-toggle="button" @click="myToggleFunction()">$10/month</button>
                  <button type="button" class="btn btn-light" v-on:click="latestType = '$25/month'" data-bs-toggle="button" @click="myToggleFunction()">$25/month</button>
                  <button type="button" class="btn btn-light" v-on:click="latestType = '$50/month'" data-bs-toggle="button" @click="myToggleFunction()">$50/month</button>
                </div>
                <button type="button"  class="btn first_submit" @click.prevent="next()">proceed to billing details</button>  
              </div>

              <div v-show="step === 2">
                <div class="step_bar">
                <p>donation</p><hr><p class="bold">shipping</p><hr><p>payment</p>
                </div>
                <h5 class="form_info">SHIPPING INFORMATION</h5>  
                <input id="address1"  class="form-control input_2" name="address1" v-model="address1" placeholder="Address 1 *">
                <input id="address2"  class="form-control input_2" name="address2" v-model="address2" placeholder="Address 2 (optional)">             
                <div class="city">
                  <input id="city"  class="form-control input_2" name="city" v-model="city" placeholder="City *">
                  <input id="postalcode"  class="form-control input_2" name="postalcode" v-model="postalcode" placeholder="Postal Code *">
                </div>
                <input id="province"  class="form-control input_2" name="province" v-model="province" placeholder="Province *">
                <button type="button" class="btn first_submit" @click.prevent="next()">proceed to payment details</button>  
              </div>

              <div v-show="step === 3">
                <div class="step_bar">
                <p>donation</p><hr><p>shipping</p><hr><p class="bold">payment</p>
                </div>
                <h5 class="form_info">DONATION AMOUNT</h5>  
                <p class="return">{{latestType}}</p>
                <h5 class="form_info">YOUR DETAILS</h5> 
                <p class="return">{{first_name + ' '}}{{last_name}}</p>
                <p class="return">{{email}}</p>
                <p class="return">{{address1 + ' '}}{{address2}}</p>
                <p class="return">{{city + ' '}}{{province + ' '}}{{postalcode}}</p>
                <h5 class="form_info">CREDIT CARD DETAILS</h5> 
                <input id="amountnubmer" class="form-control input_2" name="amountnubmer" type="text"  placeholder="Card Number">
                <input id="expiration" class="form-control input_2" name="expiration" type="text"  placeholder="Expiration Date">
                <input id="cvv" class="form-control input_2" name="cvv" type="text"  placeholder="CVV">  
                <h5 class="form_info">TODAY'S DONATION: {{}}</h5> 
                <button type="submit"  value="Save" class="btn sec_submit" @click.prevent="next()">DONATE</button>   
              </div>

              <div v-show="step === 4" class="thanks">
                <i class="fa-solid fa-check fa-7x"></i>
                <h3>Thank you!</h3>  
                <h3 class="form_info_3">Your donation will make a huge difference!</h3> 
              </div>
            </form>
          </div>
        </div>
    </div>
    <localcommunity2></localcommunity2>
  </div>



   
    
</template>


<script>
// @ is an alias to /src
import localcommunity2 from '@/components/LocalCommunityNo2.vue';

export default {
  name: 'Donate',
  components: { localcommunity2,
},
  
    data() {
    return {
      step:1,
      registration:{
        first_name:'',
        last_name:'',
        email:'',
        address1:'',
        address2:'',
        city:'',
        postalcode:'',
        province:'',
        amountnubmer:'',
        latestType:'',
        
      }
    }
  },
  methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
 
     myToggleFunction: function(event){
        let button = event.target;
        button.classList.toggle('toggled');
   }

  }
}


 
  

  


</script>

<style lang="scss">
@import "@/assets/sass/donate.scss";
</style>
