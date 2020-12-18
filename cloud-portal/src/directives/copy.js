const copy = {
  bind (el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        console.log('无复制内容')
        return
      }
    }






  }


}

export default copy