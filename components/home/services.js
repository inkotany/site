import Image from "next/image";

export default function Services() {
  return (
    <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <div class="max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
        <img
          class="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x300"
          alt="Card Image"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">Card 1 Subtitle</h2>
          <p class="mt-2 text-gray-600">
            This is a brief description of the content in this card. It provides
            a summary or key information that the user might find useful.
          </p>
        </div>
      </div>

      <div class="max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
        <img
          class="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x300"
          alt="Card Image"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">Card 2 Subtitle</h2>
          <p class="mt-2 text-gray-600">
            This is a brief description of the content in this card. It provides
            a summary or key information that the user might find useful.
          </p>
        </div>
      </div>
    </div>
  );
}
