  ybb.ajaxSubmit({
      url: '/radishweb/question/create',
      form: '#form-create',
      type: 'post',
      selector: '.btn-primary',
      regs: {
        's_id':/\S/,
        'type': /\S/,
        'sid-type': /\S/,
        'is_rich':/\S/
      },
        done: function (data) {
          console.log(data)
      }
    });