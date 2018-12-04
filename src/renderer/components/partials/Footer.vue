<template>
    <!--<footer class="bdT ta-c lh-0 fsz-sm c-grey-600">
        text
        <div class="footer-size" @mousedown="onResize" @mouseup="resize.is = false"></div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </footer>-->
    <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600"><span>Copyright © 2017 Designed by
        <a target="_blank" title="Colorlib">Colorlib</a>. All rights reserved.</span>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        resize: {
          is: false,
          startY: null,
          startContentSize: null
        }
      }
    },
    mounted () {
      document.addEventListener('mousemove', (e) => {
        if (this.resize.is) {
          const content = document.querySelector('.main-content')
          const contentSize = this.resize.startContentSize
          content.style.minHeight = contentSize + -(this.resize.startY - e.pageY) + `px`
          console.log(this.resize.startY - e.pageY, contentSize - (e.pageY + this.resize.startY) + `px`)
        }
      })
    },
    methods: {
      onResize (e) {
        this.resize.startY = e.pageY
        this.resize.startContentSize = parseInt(document.querySelector('.main-content').style.minHeight.split('px')[0])
        this.resize.is = true
      }
    }
  }
</script>

<style scoped>
    .footer-size {
        cursor: row-resize;
        height: 3px;
        background: rgba(146, 159, 182, 0.39);
    }
</style>