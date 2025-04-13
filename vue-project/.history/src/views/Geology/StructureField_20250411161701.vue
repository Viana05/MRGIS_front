<script setup>
import { ref, onMounted } from "vue";

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
// 是否显示图片库
const showGallery = ref(false);
// 图片库数据
const galleryImages = ref([
  {
    id: 1,
    src: "https://example.com/geology1.jpg",
    alt: "断层示例",
    caption: "典型断层构造",
  },
  {
    id: 2,
    src: "https://example.com/geology2.jpg",
    alt: "褶皱示例",
    caption: "岩层褶皱形态",
  },
  {
    id: 3,
    src: "https://example.com/geology3.jpg",
    alt: "节理示例",
    caption: "岩石节理发育",
  },
  {
    id: 4,
    src: "https://example.com/geology4.jpg",
    alt: "劈理示例",
    caption: "劈理构造特征",
  },
]);

// 加载文本内容
onMounted(() => {
  // 这里应该是从API或文件加载实际内容
  // 由于题目要求不能添加或删除文本内容，这里只做模拟
  chapters.value.forEach((chapter) => {
    chapter.content = `这是${chapter.title}的详细内容...`;
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
        <button @click="showGallery = !showGallery" class="gallery-btn">
          {{ showGallery ? "隐藏图库" : "显示图库" }}
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <div class="main-content">
      <!-- 侧边栏导航 -->
      <aside class="sidebar">
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
      </aside>

      <!-- 内容展示区 -->
      <div class="content-area">
        <template v-if="showGallery">
          <div class="gallery">
            <h2>地质构造图库</h2>
            <div class="image-grid">
              <div
                v-for="image in galleryImages"
                :key="image.id"
                class="image-card"
              >
                <img :src="image.src" :alt="image.alt" />
                <p>{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
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
        </template>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <p>地质构造野外观察系统 © 2023</p>
      <p>仅供科研与教学使用</p>
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
}

/* 头部样式 */
.header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.search-box {
  display: flex;
  margin-top: 15px;
  gap: 10px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.gallery-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.gallery-btn:hover {
  background-color: #2980b9;
}

/* 主要内容区布局 */
.main-content {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

/* 侧边栏样式 */
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar nav li {
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.sidebar nav li:hover {
  background-color: #e9ecef;
}

.sidebar nav li.active {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

/* 内容区样式 */
.content-area {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chapter-content h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 0;
}

.content-text {
  white-space: pre-wrap;
  margin-bottom: 20px;
  line-height: 1.8;
}

.copy-btn {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.copy-btn:hover {
  background-color: #219653;
}

/* 图片库样式 */
.gallery h2 {
  color: #2c3e50;
  margin-top: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.image-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.image-card p {
  padding: 10px;
  margin: 0;
  background-color: #f8f9fa;
  text-align: center;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 20px;
  color: #7f8c8d;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .sidebar {
    width: auto;
    margin-bottom: 20px;
  }

  .search-box {
    flex-direction: column;
  }

  .gallery-btn {
    width: 100%;
  }
}
</style>
