// nav toggle
var oNavList = document.getElementById('j-nav-list');
var aNavItem = oNavList.getElementsByTagName('li');
var oListTitle = document.getElementById('j-list-title');
var oPageList = document.getElementById('j-page-list');
var aPageBtn = oPageList.getElementsByTagName('li');

var type = 'society';

for (var i = 0; i < aNavItem.length; i ++) {
  aNavItem[i].onclick = function () {

    // 切换焦点状态
    for (var i = 0; i < aNavItem.length; i ++) {
      aNavItem[i].className = '';
    }

    this.className = 'active';

    type = this.getAttribute('data-type');
    // 更新列表信息
    updateList();
  }
}

updateList();

function updateList() {
  // update title
  if (type === 'society') {
    oListTitle.innerHTML = '社会招聘 | Join us';
  } else {
    oListTitle.innerHTML = '校园招聘 | Join us';
  }

  var aData = data[type].list;
  // console.log(aData);

  // update list
  updateItem(aData.slice(0, 10));

  // 更新分页
  updatePage(aData);
}

function updateItem(data) {
  // console.log(data);
  var oListBody = document.getElementById('j-list-body');

  oListBody.innerHTML = '';

  for (var i = 0; i < data.length; i ++) {
    var oLi = document.createElement('li');
    var str = '<strong class="name">⭐️ 职位需求： ' + data[i].job + '</strong><strong>需求人数：' + data[i].num + '</strong><strong>' + data[i].times + '</strong><p>岗位要求：';


    // '<div class="list-group">' +
    //   '<h3 id="j-list-title" class="list-title">社会招聘 | Join us</h3>' +
    //   ''

    // [
    //   '<div>',
    //     '<h3><h3>',
    //     '<p></p>',
    //   '</div>'
    // ].join('');


    data[i].require.forEach(function (item, index) {
      str += '<span>' + (index + 1) + ': ' + item + '</span>';
    });

    str += '<a href="">[查看详情]</a></p>';

    oLi.innerHTML = str;

    oListBody.appendChild(oLi);
  }
}

function updatePage(data) {
  var total = Math.ceil(data.length / 10);

  oPageList.innerHTML = '';

  for (var i = 0; i < total; i ++) {
    var oLi = document.createElement('li');
    if (!i) {
      oLi.className = 'active';
    }
    oLi.innerHTML = '<a href="Javascript:;">' + (i + 1) + '</a>'
    oPageList.appendChild(oLi);
  }

  for (var i = 0; i < aPageBtn.length; i ++) {
    aPageBtn[i].onclick = function () {
      var num = this.children[0].innerHTML - 1;

      for (var i = 0; i < aPageBtn.length; i ++) {
        aPageBtn[i].className = '';
      }

      this.className = 'active';

      handlePageClick(num);
    }
  }
}

function handlePageClick(num) {
  // updateItem()

  // console.log(type);
  // updateItem(data[type].list, num);
  var arr = data[type].list.slice(10 * num, 10 * (num + 1));

  updateItem(arr);
}
