export default function handler(req, res) {
  let body = JSON.parse(req.body);
  console.log(req.body);
  if (req.method === 'POST') {
    res.status(201).json({
      username: body.username,
      password: body.password,
    });
  } else {
    res.status(200).json({
      name: 'John Doe',
    });
  }
}
