/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posted').del()
  await knex('posted').insert([
    {id: 1, title: 'ITパスポート過去問道場',"post-date":"2023-04-01","tag":"基礎知識", "url":"https://www.itpassportsiken.com/ipkakomon.php", "pict":"sample", "p-user-id":10009},
    {id: 2, title: 'React hooksを基礎から理解する',"post-date":"2023-05-21","tag":"React", "url":"https://qiita.com/seira/items/f063e262b1d57d7e78b4", "pict":"sample", "p-user-id":10009},
    {id: 3, title: 'Schema Builder',"post-date":"2023-05-21","tag":"Knex", "url":"https://knexjs.org/guide/schema-builder.html", "pict":"sample", "p-user-id":10003},
    {id: 4, title: 'Git研修【MIXI 23新卒技術研修】',"post-date":"2023-05-22","tag":"git", "url":"https://speakerdeck.com/mixi_engineers/2023-git-training", "pict":"sample", "p-user-id":10003},
    {id: 5, title: '練習問題（問題集）AWS クラウドプラクティショナー',"post-date":"2023-05-23","tag":"AWS", "url":"https://studyand.work/list-question-aws-clf", "pict":"sample", "p-user-id":10001},
    {id: 6, title: 'Font Awesome アイコンフォント一覧',"post-date":"2023-05-24","tag":"css", "url":"https://johobase.com/font-awesome-icon-font-list-free/", "pict":"sample", "p-user-id":10002},
    {id: 7, title: 'Color Hunt',"post-date":"2023-05-25","tag":"css", "url":"https://colorhunt.co/", "pict":"sample", "p-user-id":10001},
    {id: 8, title: '【世界で70万人が受講】Web Developer Bootcamp 2023',"post-date":"2023-06-01","tag":"javaScript", "url":"https://www.udemy.com/course/the-web-developer-bootcamp-2021-japan/", "pict":"sample", "p-user-id":10002},
    {id: 9, title: 'サバイバルTypeScript',"post-date":"2023-06-01","tag":"TypeScript", "url":"https://typescriptbook.jp/", "pict":"sample", "p-user-id":10003},
    {id: 10, title: 'github',"post-date":"2023-06-01","tag":"git", "url":"https://github.com/", "pict":"git", "p-user-id":10004},
  ]);
};
