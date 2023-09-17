import json
import csv
import io

data = None
with open('./es.json') as f:
    data = json.load(f)


# Recursive function to traverse the JSON structure and extract keys and values
def extract_keys_values(d, parent_key='', csv_data=[]):
    if isinstance(d, dict):
        for k, v in d.items():
            new_key = f"{parent_key}.{k}" if parent_key else k
            extract_keys_values(v, new_key, csv_data)
    elif isinstance(d, list):
        for idx, item in enumerate(d):
            new_key = f"{parent_key}[{idx}]"
            extract_keys_values(item, new_key, csv_data)
    else:
        csv_data.append((parent_key, d))
    return csv_data

# Extract keys and values from the provided JSON data
csv_data = extract_keys_values(data)

# Convert the extracted data into CSV format
output = io.StringIO()
csv_writer = csv.writer(output, delimiter=';')
csv_writer.writerow(["Key", "Text"])  # Header
csv_writer.writerows(csv_data)
csv_content = output.getvalue()

# Write the CSV content to a file
with open('./output.csv', 'w') as f:
    f.write(csv_content)
