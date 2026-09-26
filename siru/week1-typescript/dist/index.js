"use strict";
const members = [
    {
        id: 1,
        name: "박세승",
        role: "리더",
        githubId: "githubUser1",
    },
    {
        id: 2,
        name: "신혜원",
        role: "팀원",
    },
    {
        id: 3,
        name: "이지나",
        role: "팀원",
        githubId: "githubUser3",
    },
];
// 찾으려는 회원id 받기
function guideMent(id) {
    //전달받은 id랑 일치하는 회원 찾기
    const foundMember = members.find((member) => member.id === id);
    //회원 없음
    if (!foundMember) {
        return "존재하지 않는 회원입니다.";
    }
    const githubId = foundMember.githubId ?? "등록되지 않음";
    return `안녕햐세요 ${foundMember.name}님! 역할: ${foundMember.role}, github: ${githubId}`;
}
console.log(guideMent(1));
console.log(guideMent(2));
console.log(guideMent(999));
