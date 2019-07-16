# ds-demo

## describe
```
三级联动下拉筛选框
      
```
<!-- 
    
    安装框架 : element 、 jquery 

    placeholder:占位符内容，字符串，例：请选择
    changeSelect:改变选择值触发该事件，参数是value数据对象，包括 选择的第一级id，第二级id和lable，第三级id和label
    visibleChange:下拉框收起和展示切换触发该事件，参数是true/false

    在父组件用v-model设置子组件选中值：父组件传给v-model一个对象，对象需要传入 subItemId 或者 subSubItemId属性, 剩下属性可选
    父组件通过v-model获取到的值的结构: 对象类型，包括选中的第一级id，第二级id和lable，第三级id和label，
      value: {
        itemId: "",
        subItemId: "",
        subItemLabel: "",
        subSubItemId: "",
        subSubItemLabel: ""
      },

    pickerOptions示例: [
        {
          id: "34",
          label: "White Spirits & Liqueur",
          children: [
          { id: "645", label: "Absolut Vodka", children: [] },
          { id: "646", label: "Wyborowa", children: [] }, 
          { id: "623", label: "Seagram's", children: [] },
          { id: "618", label: "Olmeca", children: [{ id: "642", label: "Altos" }] },
          { id: "633", label: "Beefeater", children: [{ id: "626", label: "Beefeater 24" }] },
          { id: "622", label: "Havana Club", children: [{ id: "630", label: "Havana 3YO" }, { id: "632", label: "Havana 7YO" }] },
          { id: "620", label: "Kahlúa", children: [] },
          { id: "641", label: "Malibu", children: [] },
          { id: "635", label: "Monkey47", children: [{ id: "643", label: "monkey 47 sloe gin" }] },
          { id: "644", label: "Pernod", children: [] }, { id: "619", label: "Ricard", children: [] }]
        },

      ],

 -->