<script setup></script>

<template>StructureField</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background: linear-gradient(135deg, #2c3e50, #4a6491);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.nav-btn {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.nav-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.nav-btn.active {
  background-color: #2c3e50;
}

.content-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.observation-content {
  white-space: pre-wrap;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid #3498db;
  margin-bottom: 20px;
  font-size: 0.95rem;
  line-height: 1.7;
}

.image-placeholder {
  background-color: #e0e0e0;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 20px 0;
  color: #666;
  font-style: italic;
}

.field-note {
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f4fc;
  border-radius: 4px;
  border-left: 4px solid #3498db;
}

.field-note h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  margin-bottom: 10px;
  resize: vertical;
}

.save-btn {
  padding: 8px 15px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-btn:hover {
  background-color: #219653;
}

.saved-notes {
  margin-top: 20px;
}

.note-item {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  border-left: 3px solid #27ae60;
}

.note-date {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
  }
}
</style>
