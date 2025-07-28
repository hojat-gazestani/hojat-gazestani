import Image from "next/image";

export default function Certificates() {

  const certificates = [
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023-05-15',
      url: 'https://example.com/verify/123',
      image: '/certificates/cka.png'
    },
    // Add more certificates
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <Image src={cert.image} alt={cert.name} className="w-full h-48 object-contain mb-4" />
            <h3 className="text-xl font-semibold">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mt-2">Issued: {cert.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
