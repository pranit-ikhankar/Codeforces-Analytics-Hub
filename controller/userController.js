async function getData (req, res, next) {
    try{
        let user_id = req.params.handle;
        let query = `https://codeforces.com/api/user.status?handle=${user_id}`;
        const request = await fetch(query);
        const response = await request.json();
        if (response.status === 'FAILED') { 
            const error = new Error(response.comment);
            error.status = 404;
            return next(error);
        }
        const filtered_data = response.result.filter((submission) => submission.verdict === 'OK');
        const tags = filtered_data.flatMap((submission) => submission.problem.tags);
        const tagsCount = tags.reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1; 
            return acc;
        }, {});
        res.status(200).json(tagsCount);
    } catch(error) {
        error.status = 500;
        error.message = "Internal Server Error";
        return next(error);
    }
};

export default getData;