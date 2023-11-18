const inputField = document.getElementById('inputField');

// 입력 필드 이벤트 리스너 등록
inputField.addEventListener('input', function() {
  if (inputField.value !== '') {
    inputField.classList.add('input-filled');
  } else {
    inputField.classList.remove('input-filled');
  }
});
