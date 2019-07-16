
<template>
  <div id="cascade-picker-example">
    <cascade-picker
      :pickerOptions="pickerOptions"
      :placeholder="placeholder"
      :indexLabel="indexLabel"
      @changeSelect="changeSelect"
      @visibleChange="visibleChange"
      v-model="pickerBrand"
    ></cascade-picker>
  </div>
</template>

<script>
import cascadePicker from "./index"

export default {
  components: {
    cascadePicker
  },
  mounted() {
    // 默认值,需要传入 subItemId 或者 subSubItemId属性, 剩下属性可选
    this.pickerBrand = {
      itemId: this.pickerOptions[0].id,
      subItemId: this.pickerOptions[0].children[0].id,
      subItemLabel: this.pickerOptions[0].children[0].label,
      subSubItemId: this.pickerOptions[0].children[0].children[0].id,
      subSubItemLabel: this.pickerOptions[0].children[0].children[0].label,
    }
  },

  data() {
    return {
      btnText: "选择",
      pickerBrand: {
        itemId: "",
        subItemId: "",
        subItemLabel: "",
        subSubItemId: "",
        subSubItemLabel: ""
      },
      placeholder: "请选择",
      indexLabel: "指标名称",
      pickerOptions: [
        {
          "id": "35",
          "label": "Whisky",
          "children": [{
            "id": "680",
            "label": "Chivas Regal",
            "children": [
              { "id": "668", "label": "Chivas 12" }, { "id": "659", "label": "Chivas Extra 12" }, { "id": "683", "label": "Chivas Ultis" }, { "id": "664", "label": "Chivas 18" }, { "id": "650", "label": "Chivas 25" }, { "id": "666", "label": "Chivas ICON" }]          },
          { "id": "694", "label": "Ballantine’s", "children": [{ "id": "658", "label": "BAL Finest" }, { "id": "685", "label": "BAL 12YO" }, { "id": "665", "label": "BAL Brazil" }, { "id": "1498", "label": "BAL Prestige" }, { "id": "1499", "label": "BAL Single Malt" }] },
          { "id": "699", "label": "The Glenlivet", "children": [{ "id": "675", "label": "Glenlivet 1824" }, { "id": "652", "label": "Glenlivet 12" }, { "id": "649", "label": "Glenlivet 15" }, { "id": "648", "label": "Glenlivet 18" }, { "id": "697", "label": "Glenlivet 21" }, { "id": "696", "label": "Glenlivet 25" }] },
          { "id": "674", "label": "Aberlour", "children": [{ "id": "692", "label": "Aberlour 12" }, { "id": "691", "label": "Aberlour 16" }, { "id": "693", "label": "Aberlour 18" }] },
          { "id": "684", "label": "Jameson", "children": [] }, { "id": "669", "label": "Royal Salute", "children": [{ "id": "747", "label": "Royal Salute 21" }, { "id": "690", "label": "Royal Salute 38" }] },
          { "id": "657", "label": "Johnnie Walker", "children": [{ "id": "681", "label": "JW Red" }, { "id": "653", "label": "JW Black" }, { "id": "654", "label": "JW Blue" }, { "id": "662", "label": "JW Gold" }] },
          { "id": "676", "label": "Jack Daniel's", "children": [] }, { "id": "688", "label": "Macallan", "children": [{ "id": "702", "label": "Macallan 12" }] },
          { "id": "679", "label": "Glenmorangie", "children": [{ "id": "700", "label": "Glenmorangie 10" }] },
          { "id": "701", "label": "Haig Club", "children": [] },
          { "id": "677", "label": "Singleton", "children": [{ "id": "695", "label": "Singleton 12" }, { "id": "698", "label": "Singleton 18" }] },
          { "id": "686", "label": "Windsor", "children": [] },
          { "id": "673", "label": "Dewar's", "children": [] }, { "id": "670", "label": "Jim Beam", "children": [] },
          { "id": "671", "label": "J&B", "children": [] },
          { "id": "682", "label": "Glenfiddich", "children": [{ "id": "655", "label": "Glenfiddich 12" }, { "id": "656", "label": "Glenfiddich 15" }, { "id": "651", "label": "Glenfiddich 18" }] },
          { "id": "672", "label": "Talisker", "children": [{ "id": "678", "label": "Talisker Storm" }, { "id": "689", "label": "Talisker 10" }] },
          { "id": "660", "label": "Ardbeg", "children": [] }, { "id": "661", "label": "Suntory Whisky", "children": [{ "id": "663", "label": "Yamazaki" }] },
          { "id": "687", "label": "Teeling", "children": [] }, { "id": "1465", "label": "Powers", "children": [] }, { "id": "1457", "label": "Wiser's", "children": [] },
          { "id": "1458", "label": "Master blend", "children": [] }, { "id": "1459", "label": "Something Special", "children": [] },
          { "id": "1451", "label": "Imperial Blue", "children": [] },
          { "id": "1460", "label": "Long John", "children": [] }, { "id": "1452", "label": "Royal Stag BIAF", "children": [] },
          { "id": "1461", "label": "Natu nobilis", "children": [] }, { "id": "1453", "label": "Blender’s Pride BIA", "children": [] },
          { "id": "1462", "label": "Imperial", "children": [] }, { "id": "1454", "label": "PASSPORT", "children": [] },
          { "id": "1463", "label": "Four Roses", "children": [] }, { "id": "1455", "label": "Clan Campbell", "children": [] },
          { "id": "1464", "label": "Royal Reserve", "children": [] }, { "id": "1456", "label": "100 PIPERS", "children": [] }]        },

        {
          "id": "32",
          "label": "Cognac",
          "children": [{ "id": "590", "label": "Martell", "children": [{ "id": "585", "label": "Martell Meal" }, { "id": "583", "label": "Martell PTI" }, { "id": "1217", "label": "Martell Cordon Bleu" }, { "id": "1218", "label": "Martell Distinction" }, { "id": "1219", "label": "Martell Noblige" }, { "id": "1220", "label": "Martell XO" }] },
          { "id": "586", "label": "Marquis de Montesquiou", "children": [{ "id": "584", "label": "Montesquiou VSOP" }, { "id": "767", "label": "Montesquiou XO Imperial" }] },
          { "id": "591", "label": "Hennessy", "children": [{ "id": "768", "label": "Hennessy Classivm" }, { "id": "771", "label": "Hennessy XO" }, { "id": "772", "label": "Hennessy Richard" }, { "id": "773", "label": "Hennessy Paradis Imperial" }, { "id": "582", "label": "Hennessy VSOP" }, { "id": "874", "label": "Hennessy Meal" }, { "id": "875", "label": "Hennessy PTI" }] },
          { "id": "587", "label": "Remy Martin", "children": [{ "id": "774", "label": "Remy Martin XO" }, { "id": "775", "label": "Remy Martin VSOP" }, { "id": "776", "label": "Remy Martin Extra" }, { "id": "777", "label": "Remy Martin CLUB" }, { "id": "592", "label": "Remy Martin Centaure" }] },
          { "id": "588", "label": "Courvoisier", "children": [{ "id": "778", "label": "Courvoisier XO" }, { "id": "779", "label": "Courvoisier VS" }, { "id": "589", "label": "Courvoisier VSOP" }] },
          { "id": "1449", "label": "Brandy Domecq", "children": [] },
          { "id": "1450", "label": "Macieira", "children": [] },
          { "id": "1448", "label": "Ararat", "children": [] },
          { "id": "1504", "label": "Camus", "children": [] },
          { "id": "1505", "label": "Hine", "children": [] }]
        },

        {
          "id": "34",
          "label": "White Spirits & Liqueur",
          "children": [{ "id": "645", "label": "Absolut Vodka", "children": [] },
          { "id": "646", "label": "Wyborowa", "children": [] }, { "id": "623", "label": "Seagram's", "children": [] },
          { "id": "618", "label": "Olmeca", "children": [{ "id": "642", "label": "Altos" }] },
          { "id": "633", "label": "Beefeater", "children": [{ "id": "626", "label": "Beefeater 24" }] },
          { "id": "622", "label": "Havana Club", "children": [{ "id": "630", "label": "Havana 3YO" }, { "id": "632", "label": "Havana 7YO" }] },
          { "id": "620", "label": "Kahlúa", "children": [] },
          { "id": "641", "label": "Malibu", "children": [] },
          { "id": "635", "label": "Monkey47", "children": [{ "id": "643", "label": "monkey 47 sloe gin" }] },
          { "id": "644", "label": "Pernod", "children": [] }, { "id": "619", "label": "Ricard", "children": [] }]
        },

      ],
    }
  },
  methods: {
    changeSelect(...argument) {
      // console.log(argument)
    },
    visibleChange(params) {
      // console.log(params)
    }
  }
}
</script>

<style lang="less">
#cascade-picker-example {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 14%;
  height: 40px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
