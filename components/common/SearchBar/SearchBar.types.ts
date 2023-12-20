
/**
 * Interface for the props on the SearchBar component.
 * 
 * @interface
 */
export interface SearchBarProps {
    // Set a placeholder on the search bar.
    placeholder?: string;
    // Value for the input.
    value: string;
    // Handle when the user types on the input.
    onChange: (value: string) => void;
}