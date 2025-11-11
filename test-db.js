const { Client } = require('pg');

const client = new Client({
  connectionString:
    'postgresql://root:aDlJ6sT0xc4Cv28u1z7YIKXVrE93pd5i@tpe1.clusters.zeabur.com:24485/zeabur',
  // 移除 ssl 配置
});

async function testConnection() {
  try {
    await client.connect();
    console.log('✅ 連接成功！');
    const res = await client.query('SELECT NOW()');
    console.log('當前時間:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('❌ 連接失敗:', err);
  }
}

testConnection();
