<template>
  <div class="ds-cascade-picker">
    <div class="filter-box">
      <div class="filter-item">
        <div class="filter-select">
          <div class="filter-box-category">
            <el-dropdown
              ref="brandSelect"
              trigger="click"
              menu-align="start"
              :hide-on-click="false"
              @visible-change="resetCategoryDropdown"
            >
              <span class="el-dropdown-link">
                <div class="select-box">{{filterParams.subSubItemLabel || filterParams.subItemLabel || placeholder }}</div>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                class="filter-box-category-dropdown"
              >
                <el-dropdown-item
                  v-for="item in pickerOptions"
                  :class="{'active': filterParams.itemId == item.id,iconfont:true}"
                  :key="item.id"
                >
                  <!-- 第一级 -->
                  <div class="category-name">
                    {{ item.label }}
                  </div>
                  <!-- 第二级 -->
                  <div
                    class="sub-brand-dropdown"
                    v-if="item.children && item.children.length != 0"
                  >
                    <div
                      class="item sub-brands"
                      v-for="(subItem,index) in item.children"
                      :class="{'active': filterParams.itemId == item.id && filterParams.subItemId == subItem.id}"
                      :key="index"
                    >
                      <div
                        @click="changeParamsSelect(item.id, subItem.id, subItem.label)"
                        :key="subItem.id"
                        @mouseover="selectSubBrands"
                        class="subItem"
                      >
                        {{ subItem.label }}
                      </div>

                      <!-- 第三级 -->
                      <div
                        class="sub-sub-brand-dropdown"
                        v-if="subItem.children && subItem.children.length != 0"
                      >
                        <div
                          class="item"
                          v-for="subSubItem in subItem.children"
                          :key="subSubItem.id"
                          :class="{'active': 
                            filterParams.itemId == item.id
                            && filterParams.subItemId == subItem.id
                            && filterParams.subSubItemId == subSubItem.id}"
                          @click="changeParamsSelect(item.id, subItem.id, subItem.label,subSubItem.id,subSubItem.label)"
                        >
                          {{ subSubItem.label }}
                        </div>
                      </div>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.less";
import "../font/iconfont.css"

export default {
  name: "ds-cascade-picker",    // 申明组件的 name属性
  props: {
    pickerOptions: {
      type: Array,
      default: () => {
        return [
          {
            id: "",
            label: "",
            children: [
              { id: "", label: "", children: [] },
              { id: "", label: "", children: [] }
            ]
          },
        ]
      }
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: {                // v-model默认绑定的值
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    filterParams() {
      return {
        itemId: this.value.itemId || (this.value.subItemId ? findObjectGroupById(this.pickerOptions, this.value.subItemId).parentId : null),
        subItemId: this.value.subItemId || (this.value.subSubItemId ? findObjectGroupById(this.pickerOptions, this.value.subSubItemId).parentId : null),
        subItemLabel: this.value.subItemLabel || (this.value.subItemId ? findObjectGroupById(this.pickerOptions, this.value.subItemId).label : null),
        subSubItemId: this.value.subSubItemId || null,
        subSubItemLabel: this.value.subSubItemLabel || (this.value.subSubItemId ? findObjectGroupById(this.pickerOptions, this.value.subSubItemId).label : null),
      }
    }
  },
  methods: {

    changeParamsSelect(itemId, subItemId, subItemLabel, subSubItemId = null, subSubItemLabel = null) {
      this.$refs.brandSelect.visible = false;
      this.$emit("changeSelect", itemId, subItemId, subItemLabel, subSubItemId, subSubItemLabel)
      // 父组件v-model的value值需要触发input事件修改
      this.$emit("input", { itemId: itemId, subItemId: subItemId, subItemLabel: subItemLabel, subSubItemId: subSubItemId, subSubItemLabel: subSubItemLabel })
    },

    resetCategoryDropdown(params) {
      $(".sub-sub-brand-dropdown").hide();
      if (params) {
        if (
          $(".sub-sub-brand-dropdown")
            .find(".item")
            .hasClass("active")
        ) {
          // 如果已经有选中的，在点开下拉框以后500毫秒让选中的第三级出现
          setTimeout(() => {
            let brandsWidth = $(".sub-brand-dropdown")
              .children(".item.active")
              .children("div")
              .width();
            let brandsHeight = $(".sub-brand-dropdown")
              .children(".item.active")
              .children("div")
              .height();
            let x =
              getElementLeft(
                $(".sub-brand-dropdown")
                  .children(".item.active")
                  .children("div")
                  .get(0)
              ) +
              brandsWidth +
              13;
            let y = $(
              $(".sub-brand-dropdown")
                .children(".item.active")
                .children("div")
                .get(0)
            ).offset().top;
            $(".sub-sub-brand-dropdown").css({
              top: y + "px",
              left: x + "px"
            });
            $(
              $(".sub-brand-dropdown")
                .children(".item.active")
                .children("div")
                .get(0)
            )
              .next(".sub-sub-brand-dropdown")
              .show();
          }, 500);
        }

        function getElementLeft(element) {
          var actualLeft = element.offsetLeft;
          var current = element.offsetParent;
          while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
          }
          return actualLeft;
        }
      }

      if (!params) {
        $(".temp-hide").removeClass("temp-hide");
      }

      $(".category-name").hover(function (e) {
        $(".show").removeClass("show");
        if ($(e.target).parents().hasClass("active")) {
          $(".active")
            .find(".sub-brand-dropdown")
            .removeClass("temp-hide");
        }
        else {
          $(".active")
            .find(".sub-brand-dropdown")
            .addClass("temp-hide");
        }
        $(e.target).next().addClass("show");
      });

      $(".sub-brand-dropdown .item").hover(function (e) {
        if (
          !$(e.target)
            .parents("div")
            .hasClass("sub-sub-brand-dropdown")
        ) {
          $(".active")
            .find(".sub-sub-brand-dropdown")
            .addClass("temp-hide");
        }
      });

      // 触发父组件下拉框展开和收起切换触发事件
      this.$emit("visibleChange", params)
    },

    selectSubBrands(e) {
      $(".sub-sub-brand-dropdown").hide();
      let brandsWidth = $(e.target).width();
      let brandsHeight = $(e.target).height();
      let x = getElementLeft(e.target) + brandsWidth + 13;
      let y = $(e.target).offset().top;
      $(".sub-sub-brand-dropdown").css({
        top: y + "px",
        left: x + "px"
      });
      $(e.target)
        .next(".sub-sub-brand-dropdown")
        .show();

      function getElementLeft(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        while (current !== null) {
          actualLeft += current.offsetLeft;
          current = current.offsetParent;
        }
        return actualLeft;
      }
    },
  }
}

function findObjectGroupById(objArray, id, parentId = null) {
  for (let i in objArray) {
    if (objArray[i].id === id) {
      return {
        label: objArray[i].label,
        parentId: parentId
      }
    }

    if (objArray[i].hasOwnProperty("children")) {
      let result = findObjectGroupById(objArray[i]["children"], id, objArray[i].id);
      if (result) {
        return result;
      }
    }
  }

  return null;
};


</script>

