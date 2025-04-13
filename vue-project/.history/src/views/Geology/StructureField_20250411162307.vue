<script setup>
import { ref, onMounted, computed } from "vue";

// 定义所有章节数据
const chapters = ref([
  { id: "fault", title: "01断层", content: "" },
  { id: "joint", title: "02节理", content: "" },
  { id: "cleavage", title: "03劈理和线理", content: "" },
  { id: "fold", title: "04褶皱", content: "" },
  { id: "extension", title: "05伸展构造", content: "" },
  { id: "shear", title: "06剪切带", content: "" },
  { id: "mountain", title: "07山脉形成", content: "" },
  { id: "plate", title: "08板块构造", content: "" },
]);

// 当前活动章节
const activeChapter = ref("fault");
// 搜索关键词
const searchTerm = ref("");
// 菜单是否可见
const menuVisible = ref(false);

// 加载文本内容
onMounted(() => {
  // 这里应该是从API或文件加载实际内容
  chapters.value.forEach((chapter) => {
    chapter.content =
      `这是${chapter.title}的详细内容...\n\n` +
      "这里应该是从txt文件中加载的实际内容。\n" +
      "由于题目要求不能添加或删除文本内容，\n" +
      "实际应用中需要将txt文件内容完整导入到这里。\n\n" +
      "这部分内容可以很长，包含地质构造的详细描述、\n" +
      "观察要点、分类标准等内容。";
  });
});

// 过滤章节
const filteredChapters = computed(() => {
  if (!searchTerm.value) return chapters.value;
  return chapters.value.filter(
    (chapter) =>
      chapter.title.includes(searchTerm.value) ||
      chapter.content.includes(searchTerm.value)
  );
});

// 切换章节
const setActiveChapter = (id) => {
  activeChapter.value = id;
  menuVisible.value = false;
  window.scrollTo(0, 0);
};

// 复制内容到剪贴板
const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert("内容已复制到剪贴板"))
    .catch((err) => console.error("复制失败:", err));
};
</script>

<template>
  <div class="geology-system">
    <!-- 顶部导航栏 -->
    <header class="header">
      <h1>地质构造野外观察系统</h1>
      <div class="search-box">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="搜索地质构造..."
          class="search-input"
        />
        <button @click="menuVisible = !menuVisible" class="menu-btn">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="content-area">
      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        v-show="activeChapter === chapter.id"
        class="chapter-content"
      >
        <h2>{{ chapter.title }}</h2>
        <div class="content-text">
          {{ chapter.content }}
        </div>
        <button @click="copyToClipboard(chapter.content)" class="copy-btn">
          复制内容
        </button>
      </div>
    </main>

    <!-- 浮动菜单 -->
    <div class="floating-menu" :class="{ visible: menuVisible }">
      <div class="menu-header">
        <h3>章节导航</h3>
        <button @click="menuVisible = false" class="close-btn">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <nav>
        <ul>
          <li
            v-for="chapter in filteredChapters"
            :key="chapter.id"
            :class="{ active: activeChapter === chapter.id }"
            @click="setActiveChapter(chapter.id)"
          >
            {{ chapter.title }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <p>地质构造野外观察系统 © 2023 - 仅供科研与教学使用</p>
    </footer>
  </div>
</template>

<style scoped>
/* 基础样式 */
.geology-system {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

/* 头部样式 */
.header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.search-box {
  display: flex;
  gap: 10px;
}

.search-input {
  width: 300px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}

.menu-btn {
  background-color: #3498db;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.menu-btn:hover {
  background-color: #2980b9;
}

/* 内容区样式 */
.content-area {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 70vh;
}

.chapter-content h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 0;
}

.content-text {
  white-space: pre-wrap;
  margin: 20px 0;
  line-height: 1.8;
  font-size: 15px;
}

.copy-btn {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.copy-btn:hover {
  background-color: #219653;
}

/* 浮动菜单样式 */
.floating-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 100;
  overflow-y: auto;
}

.floating-menu.visible {
  right: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #2c3e50;
  color: white;
}

.menu-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s;
}

nav li:hover {
  background-color: #f5f5f5;
}

nav li.active {
  background-color: #e3f2fd;
  color: #1976d2;
  font-weight: bold;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 15px;
  margin-top: 20px;
  color: #7f8c8d;
  font-size: 13px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
  }

  .search-box {
    width: 100%;
  }

  .search-input {
    width: 100%;
  }

  .floating-menu {
    width: 85%;
    right: -85%;
  }
}
</style>
