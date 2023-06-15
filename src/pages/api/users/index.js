export default function handler(req, res) {
    
  return res.status(200).json([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Smith',
    },
  ]);
}
