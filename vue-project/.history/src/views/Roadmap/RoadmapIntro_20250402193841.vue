<style scoped>
/* 整体布局样式 */
div[style*="text-align: center"] {
  margin: 20px 0;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 图片样式调整 */
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.02);
}

/* 图片标题样式 */
p[style*="text-align: center"] {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  font-style: italic;
}

/* 标签页样式调整 */
.demo-tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 标签标题样式 */
:deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

:deep(.el-tabs__item.is-active) {
  color: #409eff;
  font-weight: 600;
}

/* 折叠面板样式 */
.demo-collapse {
  margin: 0 auto;
  max-width: 1200px;
}

:deep(.el-collapse-item__header) {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding-left: 10px;
  background-color: #f8fafc;
}

:deep(.el-collapse-item__content) {
  padding: 15px 20px;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
  background-color: #fff;
}

/* 段落样式增强 */
p {
  margin-bottom: 12px;
  line-height: 1.8;
  color: #444;
}

/* 响应式调整 */
@media (max-width: 768px) {
  img {
    width: 95% !important;
  }
  
  :deep(.el-tabs__item) {
    font-size: 14px;
    padding: 0 12px;
  }
  
  p {
    font-size: 14px;
  }
}
</style>