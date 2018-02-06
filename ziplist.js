const_testList1 = ['a', 'b', 'c'];
const_testList2 = [1, 2, 3];

function zipList(list1, list2) {

  const resultList = [];
  for(let i = 0 ; i < list1.length ; i++) {

    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(ziplist(testList1, testList2));