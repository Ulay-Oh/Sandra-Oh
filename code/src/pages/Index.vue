<template>
  <div class="ulay">
    <div class="ulay-header">
      <div class="ulay-header-top">
        <ul class="ulay-header-top-title">
          <li class="element" v-for="element in elements" :key="element.value">
            <a @click.prevent="handleRoute(element)">{{ element.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ulay-body">
      <ul class="ulay-body-field">
        <li class="field" v-for="field in fields" :key="field.value"><a href="#">{{field.name}}</a></li>
      </ul>
    </div>
    <div class="ulay-footer">foot</div>
  </div>
</template>

<script>
import { elements, fields } from './common/config'

export default {
  name: 'my-first-project',
  data () {
    return {
      elements,
      fields
    }
  },
  methods: {
    handleRoute (element) {
      const { path } = element
      if (path) {
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang="scss">
.ulay{
  background-color: pink;
  ul{
    padding: 0;
  }
  &-header{
    width: 80%;
    height: 30px;
    line-height: 30px;
    margin: auto;
    padding: 5px 0;
    // background-color: #CCCCFF;
    &-top{
      .element{
        float: left;
        padding: 0 10px;
        list-style: none;
        // box-sizing: border-box;
        border-radius: 5%;
        a{
          color: #333333;
          text-decoration: none;
        }
      }
      .element:hover{
        background-color: #F0F0F0;
      }
    }
  }
  &-body{
    width: 80%;
    margin: auto;
    // background-color: #fff;
    &-field{
      display: grid;
      grid-template-columns: repeat(auto-fill, 15%);
      grid-auto-rows: 250px;
      .field{
        border: #333333 solid 1px;
        margin: 20px 25px;
        background-color: #ccc;
        list-style: none;
        transition: all 0.5s;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }
      }
      .field:hover {
        transform: scale(1.2);
        background-color: #fff;
        border: solid 1px #CCCCFF;
      }
    }
  }
  &-footer{
    width: 80%;
    margin: auto;
  }
}
</style>
