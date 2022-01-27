<template>
  <div class="w-full min-h-screen flex justify-center text-primary-black bg-[#F3F7FA]">
    <div class="max-w-screen-lg w-full mx-1">
      <div class="w-full flex justify-center p-5">
        <img src="/Logo.svg" alt="">
      </div>
      <div class="w-full flex">
        <div class="w-96 m-2 bg-white shadow-md rounded-md pb-5">
          <h3 class="font-semibold tracking-wide m-5">Количество пересадок</h3>
          <div class="flex items-center py-2 px-5 cursor-pointer">
            <div class="w-[20px] h-[20px] rounded-[2px] border border-[#9ABBCE]"></div>
            <p class="ml-3">Все</p>
          </div>
          <div class="flex items-center py-2 px-5 bg-light-blue cursor-pointer">
            <div class="w-[20px] h-[20px] rounded-[2px] border border-primary-blue">
              <img src="/Check.svg" alt="" class="w-full h-full p-[3px]">
            </div>
            <p class="ml-3">Без пересадок</p>
          </div>
        </div>
        <div class="w-full m-2">
          <div class="mb-4 bg-white shadow-md rounded-md flex overflow-hidden">
            <div
                class="p-5 flex-auto flex justify-center font-semibold cursor-pointer bg-primary-blue text-white">
              Самый дешевый
            </div>
            <div class="p-5 flex-auto flex justify-center font-semibold cursor-pointer">
              Самый быстрый
            </div>
            <div class="p-5 flex-auto flex justify-center font-semibold cursor-pointer">
              Оптимальный
            </div>
          </div>
          <div class="mt">
            <div class="bg-white shadow-md rounded-md p-5">
              <div class="flex justify-between mb-5">
                <div class="text-primary-blue font-semibold text-2xl">13 400 Р</div>
                <img src="/S7 Logo.png" alt="">
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <div class="text-xs text-[#A0B0B9] font-semibold">MOW – HKT</div>
                  <div class="text-sm font-semibold">10:45 – 08:00</div>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
