<template>
  <div v-if="packageDetail">
    <div v-show="shows">
      <div>
        <div class="flex justify-start">
          <div class="bg-sunny">
            <div class="flex justify-start pl-[130px] text-sunny">
              <div>
                <div class="flex mt-2">
                  <div class="bg-black">
                    <div class="flex space-x-24 px-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
                      <div>
                        <h1 class="font-Karantina text-2xl font-bold">
                          {{ packageDetail.name }}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-sunny">
            <div class="flex justify-end pl-8 text-sunny">
              <div>
                <div class="flex mt-2">
                  <div class="bg-black">
                    <div class="flex space-x-24 px-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
                      <div>
                        <h1 class="font-Karantina text-2xl font-bold">
                          ALL CATEGORIES
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="-mt-10">
        <div class="flex justify-center space-x-2 pb-10">
          <div class="pt-14">
            <div class="ml-16 3xl:-ml-4">
              <div v-for="(imgItem, index) in packageDetail.img" :key="imgItem.idx"
                class="flex pt-[10px] 3xl:pt-20 pb-5 3xl:pb-16 pl-14">
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="change(index)"
                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 bg-sunny relative -left-[8px] -top-[3px] border-2 border-black">
                    <img class="w-[130px] h-[90px]" :src="getFullimgPath(imgItem)" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-16 3x:pt-20">
            <div class="flex pt-2 pb-10 pl-12 3xl:pl-14 pr-6 3xl:pr-0">
              <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-100">
                <button
                  class="transition-transform duration-300 ease-in-out transform hover:scale-100 bg-sunny relative -left-2 3xl:-left-6 -top-2 3xl:-top-6 border-[3px] border-black">
                  <img class="w-full h-102" :src="getFullImagePath(packageDetail.MainImg)" alt="">
                </button>
              </div>
            </div>
          </div>

          <div>
            <div class="pt-14 3xl:pt-20 w-95">
              <div class="pt-2 pb-5 pl-4 3xl:pl-14 pr-20">
                <div class="bg-black">
                  <div
                    class="relative -top-2 -left-2 transition-transform duration-300 ease-in-out transform hover:scale-100 px-6 3xl:px-56 h-72 bg-sunny border-[3px] border-black">
                    <h1 class="font-saira text-lg font-medium pt-8">
                      {{ packageDetail.details }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex space-x-5 3xl:space-x-10 pl-5 3xl:pl-16 pt-2">
                <div class="bg-black">
                  <div class="px-4 3xl:px-28 py-2  bg-maryjane relative -left-2 -top-2 border-2 border-black">
                    <div class="flex">
                      <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold pr-2">PAX : </h1>
                      <vue-number-input v-model="pax" :min="1" :max="50" :model-value="0" size="small" inline controls
                        class="text-center w-24 font-sans text-ocean"></vue-number-input>
                    </div>
                  </div>
                </div>
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button
                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[42px] 3xl:px-20 py-2 bg-maryjane relative -left-2 -top-2 border-2 border-black">
                    <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold">
                      ADD TO WISH
                    </h1>
                  </button>
                </div>
              </div>

            </div>

            <div class="-ml-[140px] 3xl:ml-0 pt-2">
              <div class="flex justify-center pt-5 pl-16">
                <div>
                  <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button @click="orderPackage"
                      class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[160px] 3xl:px-60 py-2 3xl:py-5 bg-red-700 relative -left-2 -top-2 border-2 border-black">
                      <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold text-sunny">
                        ORDER NOW
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="tru" class=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div v-show="mid">
        <div id="snap-container"></div>
      </div>
      <div class="h-40 relative">
        <div v-show="form" class="bg-black -mt-48">
          <div class="flex justify-between px-10 py-2 bg-ocean border-[3px] border-black relative -top-2 -left-2">
            <div class=" text-sunny font-Karantina text-3xl">
              <h1>Booking Form!</h1>
            </div>
            <div @click="fals" class="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div v-show="packageDatas"
            class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
            <div>
              <div class="pt-4 pb-1">
                <label class="block text-black text-xl font-Karantina" for="">Package
                  Selected</label>
                <div>
                  <div>
                    <div>
                      <div class="bg-sunny border-2 border-black pl-2 py-2 flex justify-between">
                        <h1 class="font-Karantina text-2xl">{{ packageDetail.name }}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="pb-4 pt-1">
                <label class="block text-black text-xl font-Karantina" for="">Pax</label>
                <div class="w-28">
                  <div class="bg-sunny border-2 border-black">
                    <div class="flex">
                      <h1 class="font-Karantina text-2xl pl-2">{{ pax }} Person</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina" for="">Price</label>
                <div>
                  <h1 class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ packageDetail.price }}
                  </h1>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina">Total Price</label>
                <div>
                  <h1 class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ pax * packageDetail.price }}
                  </h1>
                </div>
              </div>
              <div class="my-4 pt-4 flex justify-end">
                <div class="bg-black w-[150px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="chenzz" class="relative -top-2 -left-2 w-full bg-sunny h-10 border-2 border-black">
                    <h1 class="font-Karantina font-bold text-2xl">Next!</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-show="userDatas">
            <div class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">First Name</label>
                <input type="text" v-model="firstName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Last Name</label>
                <input type="text" v-model="lastName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Email</label>
                <input type="text" v-model="userEmail"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Phone</label>
                <input type="text" v-model="phone"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="flex justify-around space-x-8 pb-4">
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="prev" class="border-2 border-black w-[150px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <h1 class="font-Karantina">
                      Prev
                    </h1>
                  </button>
                </div>
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="postDatas" class="border-2 border-black w-[250px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <h1 class="font-Karantina">
                      Pay
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Api from "@/services/api";

function generateUniqueOrderId() {
  const currentTime = new Date().getTime();
  const uniqueId = `${currentTime}_${Math.floor(Math.random() * 1000)}`;
  return uniqueId;
}

export default {
  data() {
    return {
      packageDetail: null,
      hide: false,
      shows: true,
      tru: false,
      packy: "Package Name",
      selectedPackage: null,
      packagePrice: null,
      pack: false,
      pax: 1,
      packageDatas: true,
      userDatas: false,
      err: false,
      form: true,
      mid: false,
    }
  },
  mounted() {
    this.packageData();
  },
  methods: {
    async packageData() {
      try {
        const idx = this.$route.params.idx;
        const response = await Api.get(`packages/${idx}`);
        this.packageDetail = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    chenzz() {
      this.packageDatas = false,
        this.userDatas = true
    },
    prev() {
      this.packageDatas = true,
        this.userDatas = false
    },
    async postDatas() {
      this.form = false;
      this.mid = true;
      try {
        const packageName = this.packageDetail.name;
        const pax = this.pax;
        const MainImg = this.packageDetail.MainImg;
        const price = this.packageDetail.price;
        const res = await Api.post('order', { packageName, pax, MainImg, price });
        console.log(res.data)

        const datas = {
          id: generateUniqueOrderId(),
          name: this.packageDetail.name,
          price: this.packageDetail.price,
          pax: this.pax,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.userEmail
        };

        datas.gross_amount = this.packageDetail.price * this.pax;

        const rezz = await Api.post("midtrans/createTransaction", datas);
        const responseData = rezz;

        if (responseData.data.data != null) {
          const clientKey = process.env.EXPRESS_CLIENT_KEY || '';
          const snapScript = 'https://app.stg.midtrans.com/snap/snap.js'
          const script = document.createElement('script');
          script.src = snapScript;
          script.setAttribute('data-client-key', clientKey);

          document.body.appendChild(script);

          window.snap.embed((responseData.data.data.token), {
            embedId: 'snap-container'
          });
          console.log(" tokenya adalah : " + responseData.data.data.token);

          console.log(responseData.data.data);
        } else {
          console.error('Failed to retrieve transaction token:', responseData.error);
        }
      } catch (error) {
        console.error('Error ordering package:', error);
      }
    },
    change(index) {
      const currentMainImg = this.packageDetail.MainImg;
      this.packageDetail.MainImg = this.packageDetail.img[index];
      this.packageDetail.img[index] = currentMainImg;
    },
    fals() {
      this.tru = false
    },
    getFullImagePath(MainImg) {
      return `http://localhost:3000${MainImg}`;
    },
    getFullimgPath(img) {
      return `http://localhost:3000${img}`;
    },
    orderPackage() {
      this.tru = true
    }
  },
}
</script>