window.onload = function () {
    USERNAME();
    PASSWORD();
    IMAGE_CHECK();
    CHECK();
    RESET();
};

function USERNAME() {
    const usernameInput = document.getElementById('username');
    usernameInput.addEventListener('input', function () {
        const username = usernameInput.value;
        let errorLabel = document.getElementById('error-label');

        if (username.trim() === '') {
            if (!errorLabel) {
                errorLabel = document.createElement('label');
                errorLabel.id = 'error-label';
                errorLabel.style.color = 'red';
                errorLabel.innerHTML = '用户名不能为空';
                usernameInput.parentNode.appendChild(errorLabel);
            }
        } else {
            if (errorLabel) {
                errorLabel.parentNode.removeChild(errorLabel);
            }
        }
    });
}

function PASSWORD() {
    // 获取密码输入框和提示标签的引用
    var passwordInput = document.getElementById("password");
    var passwordMsg = document.getElementById("password-msg");

// 监听密码输入框的输入事件
    passwordInput.addEventListener("input", function () {
        // 获取输入框的值
        var passwordValue = passwordInput.value;

        // 检查密码是否为空
        if (passwordValue.trim() === "") {
            // 如果密码为空，设置提示标签的文本和样式
            passwordMsg.textContent = "密码不能为空";
            passwordMsg.style.color = "red";
        } else {
            // 如果密码不为空，清空提示标签的文本和样式
            passwordMsg.textContent = "";
            passwordMsg.style.color = "";
        }
    });
}

function CHECK() {
    document.getElementById("submit").addEventListener("click", function(event) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var filename = document.getElementById("check_is_image").value;

        if (username === "" || password === "" || filename === "") {
            alert("用户名或密码不能为空，请输入。或者未上传图片，请上传图片。");
            event.preventDefault(); // 阻止表单提交
        } else {
            // 执行SUBMIT()逻辑
            SUBMIT();
        }
    });
}

function SUBMIT() {
    var submitButton = document.getElementById('submit');

    // 添加点击事件监听器
    submitButton.addEventListener('click', function () {
        // 弹出确认对话框
        var confirmation = confirm('是否提交？');

        if (confirmation) {
            // 用户点击了“是”，执行提交操作
            // 弹出提交成功的对话框
            alert('提交成功');
        }
    });
}

function IMAGE_CHECK() {
// 获取文件输入框元素
    var fileInput = document.getElementById('check_is_image');

// 添加change事件监听器
    fileInput.addEventListener('change', function () {
        // 获取选中的文件
        var file = fileInput.files[0];

        // 定义支持的图片类型的正则表达式
        var imageTypeRegex = /^image\/(jpeg|jpg|png|gif)$/;

        // 检查文件类型是否为图片
        if (!imageTypeRegex.test(file.type)) {
            // 弹出提示框
            alert('这不是一个图片文件，请重新上传');
            // 清空文件输入框的值
            fileInput.value = '';
        }
    });
}

function RESET() {
    // 获取提交按钮元素
    var submitButton = document.getElementById('reset');

    // 添加点击事件监听器
    submitButton.addEventListener('click', function () {
        // 弹出确认对话框
        var confirmation = confirm('是否重置？');

        if (confirmation) {
            // 用户点击了“是”，执行提交操作
            // 弹出提交成功的对话框
            alert('重置成功');
        }
    });
}
