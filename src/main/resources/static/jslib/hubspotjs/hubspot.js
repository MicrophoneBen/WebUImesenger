$(function() {
    //设置显示配置
    var messageOpt = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'ice'
    };
    Messenger.options = messageOpt;
    $('#showboot').click(function() {
        //提示
        //调用方法1
        //toastr.info('内容1');
        //调用方法2
        //toastr.info('内容2', '标题2');
        //调用方法3
        //toastr['info']('内容3', '标题3');
        //调用方法4
        //toastr.info('内容4', '标题4',messageOpts);
        Messenger().post("Your request has succeded!");
    });
    $('#showbootsuccess').click(function() {
        //成功
        //toastr.success('内容success', '标题success');
        Messenger().post({
            message: 'There was an explosion while processing your request.',
            type: 'error',
            showCloseButton: true
        });
    });
    $('#showbooterror').click(function() {
        //错误
        //toastr.error('内容error', '标题error');
        var msg;

        msg = Messenger().post({
            message: 'Launching thermonuclear war...',
            type: 'info',
            actions: {
                cancel: {
                    label: 'cancel launch',
                    action: function() {
                        return msg.update({
                            message: 'Thermonuclear war averted',
                            type: 'success',
                            actions: false
                        });
                    }
                }
            }
        });
    });
    $('#showbootwarning').click(function() {
        //警告
        //toastr.warning('内容warning', '标题warning');
        var i;

        i = 0;

        Messenger().run({
            errorMessage: 'Error destroying alien planet',
            successMessage: 'Alien planet destroyed!',
            action: function(opts) {
                if (++i < 3) {
                    return opts.error({
                        status: 500,
                        readyState: 0,
                        responseText: 0
                    });
                } else {
                    return opts.success();
                }
            }
        });
    });
    $('#clearboot').click(function() {
        //清除
        //toastr.clear();
        var msg;

        msg = Messenger().post({
            message: "I'm sorry Hal, I just can't do that.",
            actions: {
                retry: {
                    label: 'retry now',
                    phrase: 'Retrying TIME',
                    auto: true,
                    delay: 10,
                    action: function() {}
                },
                cancel: {
                    action: function() {
                        return msg.cancel();
                    }
                }
            }
        });
    });
    $('#removeboot').click(function() {
        //移除
        //toastr.remove();
        Messenger().post({
            message: "It's just me!",
            id: '4',
            singleton: true
        });

        Messenger().post({
            message: "You'll never see me",
            id: '4',
            singleton: true
        });
    });
})