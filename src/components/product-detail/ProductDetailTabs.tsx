import { useState } from "react";
import { productDetailTabs } from "../../data/productDetailData";

const tabs = [
  { id: "description", label: "Mô tả" },
  { id: "specs", label: "Thông số" },
  { id: "reviews", label: "Đánh giá" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ProductDetailTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("description");

  return (
    <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
      <div className="flex gap-6 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 pb-3 text-sm font-bold transition-colors ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-5 max-w-5xl text-sm leading-relaxed text-gray-600">
        {activeTab === "description" && <p>{productDetailTabs.description}</p>}

        {activeTab === "specs" && (
          <ul className="space-y-2">
            {productDetailTabs.specs.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {productDetailTabs.reviews.map((review) => (
              <article key={review.name} className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <span className="font-bold text-amber-500">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-2">{review.comment}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
