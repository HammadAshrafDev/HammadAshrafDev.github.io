# 🐦 Twitter Sentiment Analysis

This project performs **sentiment analysis** on Twitter data using natural language processing (NLP) techniques and machine learning. It classifies tweets as either **positive** or **negative** and visualizes model performance.

---

## 🔧 Technologies & Libraries

- Python  
- `pandas`, `numpy`, `scikit-learn`  
- `nltk` for NLP  
- `matplotlib`, `seaborn` for visualization  
- `Logistic Regression` (used in an ML pipeline)  

---

## 📂 Dataset

The project uses the [Sentiment140 dataset](http://cs.stanford.edu/people/alecmgo/trainingandtestdata.zip), which contains **1.6 million labeled tweets**. For efficiency, a **10,000-tweet sample** is used during development.

---

## 🚀 Workflow Overview

### 1. **Installation**
Install the necessary Python libraries:

```bash
pip install numpy pandas scikit-learn nltk matplotlib seaborn
```

### 2. **Data Loading**
Tweets are loaded from `training.1600000.processed.noemoticon.csv`. Sentiments are mapped as:
- `0` → Negative  
- `4` → Positive (remapped to `1`)

### 3. **Text Preprocessing**
- Removal of special characters
- Lowercasing
- Stopword removal
- Lemmatization using `WordNetLemmatizer`

### 4. **Feature Engineering**
- TF-IDF Vectorization (Top 5000 features)
- Train-test split (80/20)

### 5. **Model Training**
A pipeline is used with:
- `TfidfVectorizer`  
- `LogisticRegression` (with `liblinear` solver)

### 6. **Evaluation**
- Accuracy: **~70.75%**  
- F1 Score: **~72%**
- Visualization: Confusion Matrix using seaborn

### 7. **Custom Predictions**
You can input your own tweets and see the predicted sentiment.

---

## 📊 Results Snapshot

**Classification Report**
```
Precision: ~0.71
Recall: ~0.71
F1-Score: ~0.72
```

**Confusion Matrix**
| Actual \ Predicted | Negative | Positive |
|-------------------|----------|----------|
| **Negative**       | 662      | 318      |
| **Positive**       | 267      | 753      |

---

## 🧠 Example Predictions

```python
"I love this product!" → Positive  
"This is the worst experience ever." → Negative  
"I'm feeling very happy today!" → Positive  
"I hate when this happens." → Negative  
```

---

## 📌 Notes
- You can increase dataset size for improved accuracy.
- Can be extended using advanced models like LSTM or BERT.

---

## 📁 Files
- `Twitter Sentiment Analysis.ipynb` – Main notebook
