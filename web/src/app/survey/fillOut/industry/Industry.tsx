import "./industry.scss";

export const Industry = ({
  isIndustryInvalid,
  setIsIndustryInvalid,
}: {
  isIndustryInvalid: boolean;
  setIsIndustryInvalid: (value: boolean) => void;
}) => {
  const industryList = [
    { value: "manufacturing", label: "製造業" },
    { value: "agriculture", label: "農林水産漁業" },
    { value: "finance", label: "金融保険業" },
    { value: "logistics", label: "物流、運送" },
    { value: "advertising", label: "広告、マスコミ" },
    { value: "construction", label: "建築" },
    { value: "it", label: "IT、ソフトウェア" },
    { value: "real-estate", label: "不動産業" },
    { value: "services", label: "サービス業" },
    { value: "entertainment", label: "エンターテインメント業" },
    { value: "energy", label: "エネルギー、資源業" },
    { value: "research", label: "研究開発業" },
    { value: "medical", label: "医療" },
    { value: "welfare", label: "福祉" },
    { value: "education", label: "教育、学習支援業" },
    { value: "government", label: "公務(他に分類されないもの)" },
    { value: "other", label: "その他" },
  ];

  const handleSelect = () => {
    setIsIndustryInvalid(false);
  };

  return (
    <li className="industry">
      <label htmlFor="industry">
        業種
        <span className="must">必須</span>
      </label>
      <select
        id="industry"
        className={`industry-select ${isIndustryInvalid ? "isInvalid" : ""}`}
        name="industry"
        defaultValue=""
        onChange={() => handleSelect()}
        // required
      >
        <option value="" disabled>
          選択してください
        </option>
        {industryList.map((industry) => {
          return (
            <option key={industry.value} value={industry.label}>
              {industry.label}
            </option>
          );
        })}
      </select>
    </li>
  );
};

export default Industry;
