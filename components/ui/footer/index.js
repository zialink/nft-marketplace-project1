export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-1 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <p className="text-primary-2 mb-5 text-sm font-bold text-white">
              © {new Date().getFullYear()} NFT Marketplace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
