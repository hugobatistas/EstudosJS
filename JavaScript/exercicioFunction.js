function notasAluno(a, b, c) {
    const mediaDasNotas = (a + b + c);
    const mediaDasNotas1 = mediaDasNotas / 3;
    console.log(`Media das tres provas ${mediaDasNotas1}`);
    return mediaDasNotas1
}
notasAluno(7, 8, 9.5);