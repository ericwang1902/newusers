<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a v-link="'/index'">概览</a></li>
            <li><a v-link="'/org/dashboard'">组织管理</a></li>
            <li><a href="#">充值管理</a></li>
            <li><a v-link="'/auth'">设置</a></li>
          </ul>
        </div>
      </div>
    </nav>
</template>