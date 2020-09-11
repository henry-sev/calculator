window.onload = function() {
  //定义AC归零按钮
  let clear_output = document.querySelector("#clear_output");
  clear_output.onclick = function() {
    output.textContent = "0";
  }

  //定义数字按钮输出
  let numbers = document.querySelectorAll(".number");
  numbers.forEach(number => {
    number.addEventListener("click", function(){
      if(output.textContent === '0') output.textContent = number.textContent;
      else output.textContent += number.textContent;
    })
  })

  //定义点按钮输出
  let point = document.querySelector("#point");
  point.addEventListener("click", function(){
    if(output.textContent.indexOf(point.textContent) === -1) {
      output.textContent += point.textContent;
    }
  })

  //定义%按钮输出
  let percent = document.querySelector("#percent");
  percent.onclick = function() {
    output.textContent += percent.textContent;
  }

  //定义加、乘、除按钮输出
  //加、减、乘、除不会连续输出，如果连续输入，后者自动覆盖前者
  let arithmetics = document.querySelectorAll(".arithmetic");
  arithmetics.forEach(arithmetic => {
    arithmetic.onclick = function() {
      if(output.textContent.slice(-1) === arithmetics[0].textContent ||
        output.textContent.slice(-1) === arithmetics[1].textContent ||
        output.textContent.slice(-1) === arithmetics[2].textContent ||
        output.textContent.slice(-1) === arithmetics[3].textContent) {
        output.textContent = output.textContent.slice(0, -1) + arithmetic.textContent;
      }
      else {
        output.textContent += arithmetic.textContent;
      }
    }
  });

  //将字符串计算式转化为数学公式并输出计算结果
  function calculator() {
    let outputStr = Array.from(output.textContent).map(char => {
      if(char === "×") return "*";
      else if(char === "÷") return "/";
      else if(char === "%") return "/100";
      return char;
    });
    output.textContent = eval(outputStr.join(''));
  }

  //定义=输出
  let equal = document.querySelector("#equal");
  equal.onclick = function() {calculator()};

  //定义±按钮输出
  let negate = document.querySelector("#negate");
  negate.onclick = function() {
    calculator();
    if(output.textContent !== 0) {
      output.textContent = -output.textContent;
    }
  }
  
  //文本超出输入框问题，自动换行、自动缩小字号
  //多项式中无法插入负值问题--单独定义减号按钮




  // let add = document.querySelector("#add");
  // let subtract = document.querySelector("#subtract");
  // let multiply = document.querySelector("#multiply");
  // let divide = document.querySelector("#divide");

  //单独定义减按钮输出
  //减按钮可以跟在加、乘、除后面输出
  // let subtarct = document.querySelector("#subtract");
  // console.log(subtract)
  // subtarct.onclick = function() {
  //   if(output.textContent.slice(-1) !== subtract.textContent) {
  //     output.textContent += subtract.textContent;
  //   }
  // }


}