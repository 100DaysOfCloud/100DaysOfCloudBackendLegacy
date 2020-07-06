import { includes, orderBy } from 'lodash'

export class SimilarArticlesFactory {
  // (1.) Create by passing in articles, currentSlug
  constructor (articles, currentArticleSlug) {
    // (2.) Don't include the current article in articles list
    this.articles = articles.filter(
      (aArticle) => aArticle.slug !== currentArticleSlug);

    this.currentArticleSlug = currentArticleSlug;
    // (3.) Set default values
    this.maxArticles = 3;
    this.category = null;
    this.tags = []
  }

  // (4.) Builder pattern usage
  setMaxArticles (m) {
    this.maxArticles = m;
    return this;
  }

  setCategory (aCategory) {
    this.category = aCategory;
    return this;
  }

  setTags (tagsArray) {
    this.tags = tagsArray;
    return this;
  }

  getArticles () {
    const { category, tags, articles, maxArticles } = this;
    // (5.) We use an Identity Map to keep track of score
    const identityMap = {};

    if (!!tags === false || tags.length === 0) {
      console.error('SimilarArticlesFactory: Tags not provided, use setTags().')
      return [];
    }

    if (!!category === false) {
      console.error('SimilarArticlesFactory: Category not provided, use setCategory().')
      return [];
    }

    function getSlug (article) {
      return article.slug;
    }

    function addToMap (article) {
      const slug = getSlug(article);
      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0
        }
      }
    }

    // (7.) For category matches, we add 2 points
    function addCategoryPoints (article, category) {
      const categoryPoints = 2;
      const slug = getSlug(article);

      if (article.category === category) {
        identityMap[slug].points += categoryPoints;
      }
    }

    // (8.) For tags matches, we add 1 point
    function addTagsPoints (article, tags) {
      const tagPoint = 1;
      const slug = getSlug(article);
      
      article.tags.forEach((aTag) => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint;
        }
      })
    }

    function getIdentityMapAsArray () {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    }
    
    // (6.) Map over all articles, add to map and add points
    for (let article of articles) {
      addToMap(article);
      addCategoryPoints(article, category);
      addTagsPoints(article, tags)
    }
    
    // (9.) Convert the identity map to an array
    const arrayIdentityMap = getIdentityMapAsArray();

    // (10.) Use a lodash utility function to sort them 
    // by points, from greatest to least
    const similarArticles = orderBy(
      arrayIdentityMap, ['points'], ['desc']
    )

    // (11. Take the max number articles requested)
    return similarArticles.splice(0, maxArticles);
  }
}