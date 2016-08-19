
var oNavList = document.getElementById('nav-list');
var aNavListLi = oNavList.getElementsByTagName('li');
var contTitle = document.getElementById('j-cont-title');
var contInter = document.getElementById('cont-inter');
var pageList = document.getElementById('page-list');
var aLi = pageList.getElementsByTagName('li');
var type = 'society';


for(var i = 0;i < aNavListLi.length; i ++) {
    aNavListLi[i].onclick = function () {
        for(var i = 0;i < aNavListLi.length; i ++) {
            aNavListLi[i].className = '';
        }
       this.className = 'active';
       type = this.getAttribute('type');
       // 更新列表信息
        updataList();
    }
}

function updataList () {
    if(type == 'society') {
        contTitle.innerHTML = '社会招聘 | Join us';
    }else{
        contTitle.innerHTML = '校园招聘 | Join us';
    }

    var aData = data[type].list;
    //更新列表
    updataItem(aData.slice(0,10));

    // 更新分页

    updataPage(aData);

}
function updataItem (item) {
  contInter.innerHTML = '';
    for(var i = 0;i < item.length; i ++) {
        var oLi = document.createElement('li');
        oLi.className = 'cont-list';
        // console.log(item[i].job)
        var arr =  ['<span>の职位要求:'+ item[i].job +'</span>','<span>需求人数: '+ item[i].num +'</span>',
        '<span>'+item[i].times+'</span>','<p>岗位要求:']
        item[i].require.forEach(function (value,index) {
          arr.push(' '+ (index + 1) + ': ' + value)
        })
        arr.push('......<a href="cont.html">[查看详情]</a></p>')
        oLi.innerHTML = arr.join('');
        contInter.appendChild(oLi);
    }
}


function updataPage(data) {
  var num = Math.ceil(data.length/10);
  pageList.innerHTML = '';
  for(var j = 0;j < num;j ++) {
    var oLi = document.createElement('li');
    if(!j) {
      oLi.className = 'active';
    }
    oLi.innerHTML = '<a href="javascript:;">'+ (j + 1) +'</a>';
    pageList.appendChild(oLi);
  }

  for(var i = 0;i < aLi.length;i ++) {
    aLi[i].onclick = function () {
      var pageNum = this.children[0].innerHTML - 1;
      for(var a = 0;a < aLi.length;a ++) {
        aLi[a].className = '';
      }
      this.className = 'active';
      handlePageClick(pageNum);
    }
  }

}

function handlePageClick (num) {
  var arr = data[type].list
  updataItem(arr.slice(num*10,(num+1)*10));

}
