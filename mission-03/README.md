# 마크업 구조

## 헤더

<img src="./images/readme/markup-header.png">

## 메인

<img src="./images/readme/markup-main.png" width="800" height=auto >

## 푸터

<img src="./images/readme/markup-footer.png" width="800" height=auto>

# 컴포넌트 방식으로 구성

<img src="./images/readme/components.png" width="180" height=auto>

# select 요소

## html

<img src="./images/readme/select-html.png" width="600" height=auto>

## css

<img src="./images/readme/select-css.png" width="600" height=auto>

셀렉트 커스터마이징

1. appearance: none;
   기본 화살표 없애기

2. background-image: url(/), url(/);
   셀렉트 백그라운드에 두 이미지 넣어서 위치 조정

## video
https://github.com/nessaleee/home-work/assets/144419094/a9c9eaf9-1101-485d-8ec0-71b3ff8c6047

# form 요소

## html
<img src="./images/readme/form-html.png" width="600" height=auto>

## input의 label, animation 부분 css 
```
.form-input-label{
  position: absolute;
  top: 50%;
  left: 20px; 
  transition: all 0.3s ease;
  color: var(--gray-500, #757575);
  font-size: var(--text--normal);
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.008px;
  pointer-events: none;
  transform: translateY(-50%);
}

#get-started:focus + .form-input-label{
  font-size: var(--text--x-small);
  color: var(--red-500, #E50914);
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.006px;
  transform: translateY(-130%);
}
```

## video
https://github.com/nessaleee/home-work/assets/144419094/5c9d6ef8-6239-4af9-80d2-0a7005154672

# 반응형 구현
전체적인 레이아웃은 플랙스박스로 구성 후,
미디어쿼리를 통해 600px을 브레이크 포인트로 너비에 따른
반응형을 구현 함.

# video
https://github.com/nessaleee/home-work/assets/144419094/7b395486-81d8-4086-87d5-084d0bad8935
